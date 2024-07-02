import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import MuiResponsive from "./components/MuiResponsive";
import MuiSelectBox from "./components/FormFieldComponents/MuiSelectBox";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      // main: colors.orange[500],
      main: "#25265E",
    },
    neutral: {
      main: colors.grey[500],
      //default main,light,dark,contrastText
      darker: colors.grey[700],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography></MuiTypography> */}
        {/* <MuiButtons /> */}
        {/* <MuiButtonGroup /> */}
        {/* <MuiToggleButtons /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelectBox /> */}
        {/* <MuiRadioButton/> */}
        {/* <MuiCheckbox/> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete/> */}
        {/* <MuiLayout /> */}
        {/* <MuiCards /> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadCrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChips /> */}
        {/* <MuiToolTip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiTabs/> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry /> */}
        {/* <MuiResponsive /> */}
        <MuiSelectBox/>
      </div>
    </ThemeProvider>
  );
}

export default App;
//docs > customization > default theme
