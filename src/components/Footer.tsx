const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground rounded-lg p-2">
                <div className="text-lg font-bold text-zalopay-blue">Zalo</div>
              </div>
              <span className="text-primary-foreground font-bold">ZaloPay</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Ví điện tử quốc dân - Thanh toán tiện lợi, bảo mật tuyệt đối
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold">Sản phẩm</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Chuyển tiền</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Thanh toán</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Nạp tiền điện thoại</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Đóng hóa đơn</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Báo cáo lỗi</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Góp ý</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-primary-foreground font-semibold">Kết nối</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Zalo Official</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 ZaloPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;