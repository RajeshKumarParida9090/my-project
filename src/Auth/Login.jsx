import React from "react";
import { Box, Container, Grid, TextField } from '@mui/material';
import ReactPlayer from "react-player";
import { Form, FormikProvider, useFormik } from "formik";
const Login = () => {
    const formik = useFormik({
        initialValues: {
            number: "",
            remember: "",
        },

        // onSubmit: async () => {  };

        //   try {

        //   } catch (error) {

        //   }
        // },
    });
    const { errors, touched, values, handleSubmit, getFieldProps } =
        formik;
    return (
        <>
            <Box className="login-container">
                <Container maxWidth="md" className="login-form-container">
                    <Grid container columnSpacing={4} style={{ zIndex: "99", position: "relative" }}>
                        <FormikProvider value={formik}>
                            <Form>
                                <TextField
                                    fullWidth
                                    autoComplete="off"
                                    variant="outlined"
                                    type="number"
                                    name="phone"
                                    className="mt-2"
                                    placeholder="Enter Your Mobile Number "
                                    {...getFieldProps("number")}
                                    error={Boolean(touched.number && errors.number)}
                                    helperText={touched.number && errors.number}
                                />
                            </Form>
                        </FormikProvider>
                    </Grid>
                </Container>
                <Box class="intro-video" style={{ zIndex: "9", position: "fixed", top: "0" }}>
                    <ReactPlayer
                        className="videoBGWidth videoNext"
                        url='https://watch.videospot.io/ipfs/QmSBV3sQNiYfHGK9mkvg8Sde6ETrsrtygNB965DBGD4FLP'
                        // url="C:\Users\admin\Desktop\my-git-project\my-project\src\assets\video\istockphoto-514968220-640_adpp_is.mp4"
                        playing={true}
                        autoPlay
                        muted={true}
                        controls={false}
                        loop={true}
                    />
                </Box>
            </Box>
        </>
    )
}
export default Login;