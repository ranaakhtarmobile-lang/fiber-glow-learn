import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerAd from "@/components/BannerAd";
import Index from "./pages/Index.tsx";
import WhatIsFiber from "./pages/WhatIsFiber.tsx";
import Types from "./pages/Types.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Installation from "./pages/Installation.tsx";
import Tools from "./pages/Tools.tsx";
import Uses from "./pages/Uses.tsx";
import Components from "./pages/Components.tsx";
import Glossary from "./pages/Glossary.tsx";
import OTDRSimulator from "./pages/OTDRSimulator.tsx";
import CableGuide from "./pages/CableGuide.tsx";
import Quiz from "./pages/Quiz.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/what-is-fiber" element={<WhatIsFiber />} />
                <Route path="/types" element={<Types />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/otdr-simulator" element={<OTDRSimulator />} />
                <Route path="/uses" element={<Uses />} />
                <Route path="/components" element={<Components />} />
                <Route path="/cable-guide" element={<CableGuide />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
