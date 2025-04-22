'use client'

import {
    Box, Stack, Typography, useMediaQuery, useTheme,
    Snackbar, Alert
} from "@mui/material";
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from "../../components/Header/Header";
import { useContactForm } from "../../hooks/useContactForm";
import ContactSection from "../../components/ContactSection/ContactSection";

export default function ContactPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { control, errors, onSubmit, isSubmitting, statusMessage } = useContactForm();

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end start"]
    });

    return (
        <>
            <Header />
            <Stack display={'xs:flex md:block'} flexDirection={'column'} sx={{ scrollBehavior: 'smooth' }} component={'main'} width={'98%'}>
                <Stack
                    component="section"
                    sx={{
                        width: '100%',
                        height: { xs: 'calc(100vh - 57.59px)', md: 'calc(100vh - 62px)' },
                        backgroundColor: "var(--mui-palette-background-paper)",
                        borderRadius: '12px',
                    }}
                >
                    <ContactSection
                        scrollYProgress={scrollYProgress}
                        control={control}
                        errors={errors}
                        onSubmit={onSubmit}
                        isSubmitting={isSubmitting}
                        statusMessage={statusMessage}
                        isMobile={isMobile}
                    />
                </Stack>
            </Stack>
        </>
    );
} 