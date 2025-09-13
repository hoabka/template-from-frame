import Header from "@/components/Header";
import QRSection from "@/components/QRSection";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <QRSection />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
