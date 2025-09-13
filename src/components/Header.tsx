import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-foreground rounded-lg p-2">
              <div className="text-2xl font-bold text-zalopay-blue">Zalo</div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">ZaloPay</h1>
              <p className="text-sm text-primary-foreground/80">Tài chính</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Trang chủ
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Dịch vụ
            </a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Hỗ trợ
            </a>
            <Button variant="secondary" size="sm">
              Đăng nhập
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;