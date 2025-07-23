import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nano White 12mL", 
      description: "Белый герметик-присадка для систем кондиционирования с объемом 12мл",
      features: ["Быстрое действие", "Совместим с R134a", "Точная дозировка"],
      image: "https://cdn.poehali.dev/files/094b461d-73a5-4ed4-b57a-6afcea728c37.png",
      videoUrl: "",
      videoType: ""
    },
    {
      id: 2,
      name: "Nano Ultra 6mL",
      description: "Ультра формула в компактном шприце объемом 6мл для точного применения",
      features: ["Компактный размер", "Ультра формула", "Простое применение"],
      image: "https://cdn.poehali.dev/files/7f9eb5f9-0c22-4b39-90eb-0c5d81087aac.png",
      videoUrl: "",
      videoType: ""
    },
    {
      id: 3,
      name: "Nano Blue 30mL",
      description: "Синий герметик увеличенного объема 30мл для профессионального использования",
      features: ["Большой объем", "Профессиональная формула", "Промышленное качество"],
      image: "https://cdn.poehali.dev/files/a78f648a-53f4-46aa-8756-979533ad6955.png",
      videoUrl: "",
      videoType: ""
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [videoForm, setVideoForm] = useState({ url: "", type: "youtube" });

  const handleVideoSave = () => {
    if (selectedProduct && videoForm.url) {
      setProducts(prevProducts => 
        prevProducts.map(product => 
          product.id === selectedProduct.id 
            ? { ...product, videoUrl: videoForm.url, videoType: videoForm.type }
            : product
        )
      );
      setVideoForm({ url: "", type: "youtube" });
      setSelectedProduct(null);
    }
  };

  const getVideoEmbedUrl = (url, type) => {
    if (!url) return "";
    
    if (type === "youtube") {
      const videoId = url.includes("v=") ? url.split("v=")[1]?.split("&")[0] : url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (type === "rutube") {
      const videoId = url.includes("/video/") ? url.split("/video/")[1]?.split("/")[0] : url.split("/").pop();
      return `https://rutube.ru/play/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-[#1E293B]">RUSSTAT NANO</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">Главная</a>
              <a href="#products" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">Продукция</a>
              <a href="#about" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">О компании</a>
              <a href="#instructions" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">Инструкции</a>
              <a href="#certificates" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-[#1E293B] hover:text-[#2563EB] transition-colors">Контакты</a>
            </nav>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                RUSSTAT NANO
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Профессиональные герметики-присадки для устранения микро утечек во фреоновых системах
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="hover-scale">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Смотреть продукцию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2563EB]">
                  <Icon name="Play" className="mr-2" size={20} />
                  Видео инструкции
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/cbb0e466-f234-4b0c-9d51-4e74b34615fd.jpg" 
                alt="Продукция Russtat Nano"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Линейка продукции NANO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Три специализированных решения для устранения микро утечек в различных типах фреоновых систем
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="hover-scale animate-fade-in hover:shadow-lg transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-[#1E293B]">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-[#1E293B]">Особенности:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 text-[#2563EB]">
                        <Icon name="PlayCircle" size={20} />
                        <span className="text-sm font-medium">
                          {product.videoUrl ? "Видео инструкция готова" : "Видео инструкция будет добавлена"}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full">
                      <Icon name="FileText" className="mr-2" size={16} />
                      Техническая документация
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-6">
                О компании RUSSTAT
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на разработке и производстве высококачественных химических решений 
                для автомобильной и промышленной отраслей. Наша линейка NANO представляет собой результат 
                многолетних исследований в области герметизации фреоновых систем.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563EB] mb-2">15+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2563EB] mb-2">1000+</div>
                  <div className="text-gray-600">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/a7719856-8312-496e-8824-e330816b7387.jpg" 
                alt="Производство Russtat"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section id="instructions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Видео инструкции
            </h2>
            <p className="text-xl text-gray-600">
              Подробные руководства по применению каждого продукта линейки NANO
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="hover-scale transition-all duration-300">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    {product.videoUrl ? (
                      <iframe
                        src={getVideoEmbedUrl(product.videoUrl, product.videoType)}
                        className="w-full h-full rounded-lg"
                        frameBorder="0"
                        allowFullScreen
                        title={`Видео инструкция для ${product.name}`}
                      />
                    ) : (
                      <div className="text-center">
                        <Icon name="PlayCircle" size={48} className="text-[#2563EB] mb-2 mx-auto" />
                        <p className="text-sm text-gray-600">Видео будет загружено</p>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-[#1E293B]">Инструкция: {product.name}</CardTitle>
                  <CardDescription>Пошаговое руководство по применению</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          setSelectedProduct(product);
                          setVideoForm({ url: product.videoUrl || "", type: product.videoType || "youtube" });
                        }}
                      >
                        <Icon name="Upload" className="mr-2" size={16} />
                        {product.videoUrl ? "Изменить видео" : "Загрузить видео"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Загрузить видео для {product.name}</DialogTitle>
                        <DialogDescription>
                          Добавьте ссылку на видео с YouTube или Rutube
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Платформа</label>
                          <Select 
                            value={videoForm.type} 
                            onValueChange={(value) => setVideoForm(prev => ({ ...prev, type: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите платформу" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="youtube">YouTube</SelectItem>
                              <SelectItem value="rutube">Rutube</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Ссылка на видео</label>
                          <Input
                            placeholder={videoForm.type === "youtube" ? 
                              "https://www.youtube.com/watch?v=..." : 
                              "https://rutube.ru/video/..."
                            }
                            value={videoForm.url}
                            onChange={(e) => setVideoForm(prev => ({ ...prev, url: e.target.value }))}
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                            Отмена
                          </Button>
                          <Button onClick={handleVideoSave}>
                            <Icon name="Save" className="mr-2" size={16} />
                            Сохранить
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" className="mr-2" size={16} />
                    Скачать PDF инструкцию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              Сертификаты качества
            </h2>
            <p className="text-xl text-gray-600">
              Наша продукция соответствует международным стандартам качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((cert, index) => (
              <Card key={cert} className="hover-scale cursor-pointer transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src="/img/4f3e2f82-46bc-4bec-9fd9-f0af6f569105.jpg" 
                      alt="Сертификат качества"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-[#1E293B] text-center">Сертификат №{cert}</h3>
                  <p className="text-sm text-gray-600 text-center mt-2">ISO 9001:2015</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-[#1E293B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-[#2563EB] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">г. Москва, ул. Промышленная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-[#2563EB] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-[#2563EB] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@russtat-nano.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-[#2563EB] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-[#1E293B]">Связаться с нами</CardTitle>
                  <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">Имя</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563EB] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563EB] focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-2">Сообщение</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"></textarea>
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-xl font-bold">RUSSTAT NANO</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные решения для фреоновых систем
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Nano White 12mL</li>
                <li>Nano Ultra 6mL</li>
                <li>Nano Blue 30mL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Инструкции</li>
                <li>Техподдержка</li>
                <li>Гарантия</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 RUSSTAT NANO. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;