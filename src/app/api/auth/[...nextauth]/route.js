import connect from "@/utils/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = User.findOne({ email: credentials.email });

          if (user) {
            // check passwrd
            const checkPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (checkPassword) {
              return user;
            } else {
              ("Wrong Credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
