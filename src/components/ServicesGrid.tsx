import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const services = [
    {
      title: "HOMEFARM",
      description: "Cung cấp thực phẩm đạt tiêu chuẩn Quốc Tế. Cá hồi Nauy, Thịt bò...",
      users: "900N người dùng",
      bgColor: "bg-red-500",
      icon: "🏠"
    },
    {
      title: "SYNAMART Cửa Số Vàng",
      description: "SYNAMART - Cửa Số Vàng là một lưa chọn tuyệt vời cho các khách hàng...",
      users: "40N người dùng",
      bgColor: "bg-blue-500",
      icon: "☀️"
    },
    {
      title: "Hi FPT",
      description: "Ứng dụng bảo hành và đăng cước Internet FPT, nâng cấp dịch vụ, hỗ tr...",
      users: "1tr người dùng",
      bgColor: "bg-blue-600",
      icon: "📱"
    },
    {
      title: "Bánh mì Huynh Hoa",
      description: "Bánh Mì Huynh Hoa - Bánh Mì Sài Gòn",
      users: "20N người dùng",
      bgColor: "bg-orange-400",
      icon: "🥖"
    }
  ];

  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Gợi ý cho bạn</h2>
          <button className="text-zalopay-blue hover:text-zalopay-dark-blue font-medium transition-colors">
            Xem tất cả
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              users={service.users}
              bgColor={service.bgColor}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;