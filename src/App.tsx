import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import WhyUs from "./pages/WhyUs";
import Blog from "./pages/Blog";
import Ebook from "./pages/Ebook";
import WebinarNews from "./pages/WebinarNews";
import Webinars from "./pages/Webinars";
import News from "./pages/News";
import Testimonials from "./pages/Testimonials";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route path="/webinar-news" element={<WebinarNews />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/news" element={<News />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
