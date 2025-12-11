import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Index = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-amber-50">
      <header className="backdrop-blur-xl bg-white/40 border-b border-white/20 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/569106fc-1979-4787-88ea-10fa0e10e41a/files/469f2100-0a13-4449-910e-0f88646dbe8b.jpg" 
                alt="ФСТЭК" 
                className="h-16 w-16 object-contain rounded-2xl bg-white/60 p-2 backdrop-blur-sm"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">ИИ-Платформа ФСТЭК</h1>
                <p className="text-sm text-gray-600">Федеральная служба по техническому и экспортному контролю</p>
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl px-6 py-3 border border-white/40 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-amber-500 flex items-center justify-center text-white font-semibold">
                  ИИ
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">Иванов Иван</p>
                  <p className="text-sm text-gray-600">Начальник отдела</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Базовое рабочее место сотрудника</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600">
                    <Icon name="BookOpen" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">Базы знаний</CardTitle>
                </div>
                <CardDescription>Централизованное хранилище документов и регламентов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary" className="rounded-xl">Нормативные акты</Badge>
                  <Badge variant="secondary" className="rounded-xl">Методические материалы</Badge>
                  <Badge variant="secondary" className="rounded-xl">Инструкции</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600">
                    <Icon name="ClipboardList" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">Поручения</CardTitle>
                </div>
                <CardDescription>Управление задачами и контроль исполнения</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Активные</span>
                    <Badge className="rounded-full bg-red-500">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">В работе</span>
                    <Badge className="rounded-full bg-amber-500">7</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Завершённые</span>
                    <Badge className="rounded-full bg-gray-500">45</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700">
                    <Icon name="MessageSquare" className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">Обращения и запросы</CardTitle>
                </div>
                <CardDescription>Работа с входящими обращениями граждан</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="rounded-xl">Новые: 8</Badge>
                  <Badge variant="outline" className="rounded-xl">На рассмотрении: 15</Badge>
                  <Badge variant="outline" className="rounded-xl">Ответы даны: 156</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Функции по отделам</h2>
          <div className="space-y-4">
            <Collapsible open={expandedSections.includes('export')} onOpenChange={() => toggleSection('export')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-red-600 to-red-700">
                          <Icon name="FileCheck" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Экспортный контроль</CardTitle>
                          <CardDescription className="text-base">Выдача разрешений и аккредитация</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('export') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Award" size={20} className="text-red-600" />
                          Выдача разрешений
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Автоматизированная обработка заявок на разрешения</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Проверка документов
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Формирование разрешений
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Учёт и контроль
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="BadgeCheck" size={20} className="text-red-600" />
                          Аккредитация
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Управление процессом аккредитации организаций</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Приём заявок
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Проверка соответствия
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Выдача аттестатов
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('protection')} onOpenChange={() => toggleSection('protection')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700">
                          <Icon name="Shield" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Техническая защита информации</CardTitle>
                          <CardDescription className="text-base">Генерация документов и экспертиза</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('protection') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="FileText" size={20} className="text-amber-600" />
                        Генерация документов
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Техническое задание</div>
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Акты проверки</div>
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Модель угроз</div>
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Заключения экспертизы</div>
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Отчёты аттестации</div>
                        <div className="p-3 rounded-xl bg-white/60 text-sm">Проекты решений</div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('regulation')} onOpenChange={() => toggleSection('regulation')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800">
                          <Icon name="Scale" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Нормативно-правовое регулирование</CardTitle>
                          <CardDescription className="text-base">Анализ и сравнение документов</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('regulation') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="GitCompare" size={20} className="text-gray-700" />
                          Сравнительный анализ
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">ИИ-сравнение редакций документов и выявление изменений</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Построчное сравнение
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Семантический анализ
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Отчёт об изменениях
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="CheckCircle2" size={20} className="text-gray-700" />
                          Проверка соответствия НПА
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Автоматическая проверка на соответствие вышестоящим актам</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Анализ иерархии НПА
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Выявление противоречий
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Рекомендации по доработке
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('counter')} onOpenChange={() => toggleSection('counter')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-red-700 to-red-800">
                          <Icon name="Radio" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Противодействие техническим разведкам</CardTitle>
                          <CardDescription className="text-base">Мониторинг и инфографика мероприятий</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('counter') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-300/40 text-center">
                          <div className="text-3xl font-bold text-red-700 mb-1">156</div>
                          <div className="text-sm text-gray-700">Федеральный уровень</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-300/40 text-center">
                          <div className="text-3xl font-bold text-amber-700 mb-1">892</div>
                          <div className="text-sm text-gray-700">Региональный уровень</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-300/40 text-center">
                          <div className="text-3xl font-bold text-gray-700 mb-1">2,341</div>
                          <div className="text-sm text-gray-700">Местный уровень</div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="BarChart3" size={20} className="text-red-700" />
                          Динамика по типам мероприятий
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Специальные проверки</span>
                              <span className="font-semibold">67%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '67%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Аттестация объектов</span>
                              <span className="font-semibold">84%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600" style={{width: '84%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1 text-sm">
                              <span>Контрольные измерения</span>
                              <span className="font-semibold">92%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-gray-500 to-gray-600" style={{width: '92%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('inspection')} onOpenChange={() => toggleSection('inspection')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-800">
                          <Icon name="ClipboardCheck" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Проведение проверок</CardTitle>
                          <CardDescription className="text-base">Генерация документов и автоматическое протоколирование</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('inspection') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="FileStack" size={20} className="text-amber-700" />
                          Генерация пакета документов
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Автоматическое формирование полного комплекта</p>
                        <div className="space-y-2">
                          <div className="p-2 rounded-lg bg-white/60 text-sm flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-amber-600" />
                            План проверки
                          </div>
                          <div className="p-2 rounded-lg bg-white/60 text-sm flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-amber-600" />
                            Программа проверки
                          </div>
                          <div className="p-2 rounded-lg bg-white/60 text-sm flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-amber-600" />
                            Чек-листы
                          </div>
                          <div className="p-2 rounded-lg bg-white/60 text-sm flex items-center gap-2">
                            <Icon name="FileText" size={16} className="text-amber-600" />
                            Акт проверки
                          </div>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Video" size={20} className="text-amber-700" />
                          Автоматическое протоколирование
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">ИИ-обработка записей проверок с распознаванием речи</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                            Транскрипция аудио/видео
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                            Выделение ключевых фактов
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                            Формирование протокола
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                            Связь с нарушениями
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
