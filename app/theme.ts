import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                fontFamily: "var(--font-roboto)",
            },
        },
    },
    fonts: {
        heading: "var(--font-roboto)",
        body: "var(--font-roboto)",
    },
    colors: {
        brand: {
            100: "#CB4848",
            200: "#EEECEC",
            300: "#CB4848"
        },
        dark: {
            100: '#1E1E1E'
        }
    },
});
