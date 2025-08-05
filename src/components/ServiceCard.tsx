interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientClass: string;
  iconBgColor: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  gradientClass, 
  iconBgColor 
}: ServiceCardProps) {
  return (
    <div className={`${gradientClass} p-8 rounded-xl hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 card-hover`}>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
} 