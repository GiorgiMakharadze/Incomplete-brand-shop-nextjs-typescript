import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BiLeftArrowAlt } from "react-icons/bi";
import styles from "../styles/signin.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginInput from "@/components/inputs/loginInput";
import { useState } from "react";

const initialvalues = {
  login_email: "",
  login_password: "",
};

const Signin = () => {
  const [user, setUser] = useState(initialvalues);
  const { login_email, login_password } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address"),
    login_password: Yup.string().required("Please Enter a password"),
  });
  return (
    <>
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best Eshopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
              onSubmit={(values, actions) => {
                // handle the form submit event and log in the user
                console.log(values);
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="Georgia" />
    </>
  );
};

export default Signin;
