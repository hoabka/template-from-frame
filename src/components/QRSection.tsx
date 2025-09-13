import qrCodeImage from "@/assets/qr-code.png";

const QRSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                ZALOPAY - VÍ ĐIỆN TỬ QUỐC DÂN NGAY TRONG ZALO
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ZaloPay giúp bạn bạn chuyển tiền miễn phí và thanh toán các tiện ích, dịch vụ phí với vài cham đơn giản. Thanh toán hóa đơn,...
              </p>
              <button className="text-zalopay-blue hover:text-zalopay-dark-blue font-medium transition-colors">
                Xem thêm
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Hướng dẫn quét QR để mở ứng dụng trên Zalo:
              </h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zalopay-blue text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    1
                  </span>
                  <span>Mở ứng dụng Zalo trên điện thoại</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zalopay-blue text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    2
                  </span>
                  <span>Bấm vào biểu tượng QR 📱</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-zalopay-blue text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    3
                  </span>
                  <span>Quét mã QR của Mini App</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gradient-qr p-8 rounded-3xl shadow-qr max-w-sm w-full">
              <div className="bg-primary-foreground rounded-2xl p-6 text-center space-y-4">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code to open ZaloPay Mini App" 
                  className="w-full max-w-xs mx-auto"
                />
                <p className="text-sm text-muted-foreground">
                  Quét QR để mở ứng dụng trên Zalo
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                  <span>📱</span>
                  <span>Mini App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRSection;