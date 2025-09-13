interface ServiceCardProps {
  title: string;
  description: string;
  users: string;
  bgColor: string;
  textColor?: string;
  icon?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  users, 
  bgColor, 
  textColor = "text-primary-foreground",
  icon 
}: ServiceCardProps) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group`}>
      <div className="space-y-4">
        {icon && (
          <div className="text-2xl">{icon}</div>
        )}
        <div className="space-y-2">
          <h3 className="text-lg font-bold group-hover:scale-105 transition-transform">
            {title}
          </h3>
          <p className="text-sm opacity-90 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs opacity-80">
          <span>👥</span>
          <span>{users}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;