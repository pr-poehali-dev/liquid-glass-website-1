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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700">
                    <Icon name="BookOpen" className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">Базы знаний</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-700">324</div>
                  <p className="text-xs text-gray-600 mt-1">документов</p>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                    <Icon name="Inbox" className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">Поступившие</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">28</div>
                  <p className="text-xs text-gray-600 mt-1">новых заявок</p>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600">
                    <Icon name="Clock" className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">В работе</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15</div>
                  <p className="text-xs text-gray-600 mt-1">в процессе</p>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
                    <Icon name="FileCheck" className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">На согласовании</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">7</div>
                  <p className="text-xs text-gray-600 mt-1">ожидают</p>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
                    <Icon name="CheckCircle2" className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">Решено</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">189</div>
                  <p className="text-xs text-gray-600 mt-1">завершено</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Функции по отделам</h2>
          <div className="space-y-4">
            <Collapsible open={expandedSections.includes('licensing')} onOpenChange={() => toggleSection('licensing')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-red-600 to-red-700">
                          <Icon name="Award" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Лицензирование</CardTitle>
                          <CardDescription className="text-base">Лицензии на ТЗКИ и разработку СЗИ (117 приказ ФСТЭК)</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('licensing') ? 'ChevronUp' : 'ChevronDown'} 
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
                          <Icon name="Shield" size={20} className="text-red-600" />
                          Лицензии на ТЗКИ
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Деятельность по технической защите конфиденциальной информации</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Приём и проверка заявок
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Экспертиза документов
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Проверка соответствия требованиям
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Выдача лицензий
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Cpu" size={20} className="text-red-600" />
                          Лицензии на разработку СЗИ
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Разработка и производство средств защиты конфиденциальной информации</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Оценка технической базы
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Проверка квалификации персонала
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Аудит производственных процессов
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                            Лицензирование производства
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-red-50/80 to-amber-50/60 border border-red-200/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="FileText" size={20} className="text-red-700" />
                        Генерация документов по итогу лицензирования
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Лицензия</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Экспертное заключение</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Акт проверки</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Уведомление</div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('certification')} onOpenChange={() => toggleSection('certification')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700">
                          <Icon name="BadgeCheck" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Сертификация</CardTitle>
                          <CardDescription className="text-base">Сертификация СЗИ и классификация ИС (117 приказ ФСТЭК)</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('certification') ? 'ChevronUp' : 'ChevronDown'} 
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
                          <Icon name="Award" size={20} className="text-amber-600" />
                          Сертификация СЗИ
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Выдача сертификатов соответствия средств защиты информации</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Приём заявки на сертификацию
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Испытания средств защиты
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Анализ результатов испытаний
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Выдача сертификата соответствия
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Layers" size={20} className="text-amber-600" />
                          Классификация и аттестация ИС
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Защита персональных данных и гостайны по требованиям ФСТЭК</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Определение класса защищённости
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Проведение аттестационных испытаний
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Проверка соответствия требованиям
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                            Выдача аттестата соответствия
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 to-yellow-50/60 border border-amber-200/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="FileStack" size={20} className="text-amber-700" />
                        Генерация документов сертификации
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Сертификат соответствия</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Протокол испытаний</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Аттестат</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Техническое заключение</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Акт классификации</div>
                        <div className="p-2 rounded-xl bg-white/80 text-sm text-center">Отчёт об испытаниях</div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('attestation')} onOpenChange={() => toggleSection('attestation')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700">
                          <Icon name="FileCheck2" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Аттестация</CardTitle>
                          <CardDescription className="text-base">Аттестация государственных инфосистем (117 приказ ФСТЭК)</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('attestation') ? 'ChevronUp' : 'ChevronDown'} 
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
                        <Icon name="Server" size={20} className="text-blue-600" />
                        Процесс аттестации государственных информационных систем
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">1</div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Подача заявки на аттестацию</p>
                            <p className="text-xs text-gray-600 mt-1">Анализ документации и определение категории ГИС</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">2</div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Предварительное обследование</p>
                            <p className="text-xs text-gray-600 mt-1">Оценка текущего состояния защищённости системы</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">3</div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Аттестационные испытания</p>
                            <p className="text-xs text-gray-600 mt-1">Проверка эффективности применённых мер защиты</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">4</div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Анализ соответствия требованиям 117 приказа</p>
                            <p className="text-xs text-gray-600 mt-1">Проверка выполнения всех требований по защите информации</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">5</div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">Выдача аттестата соответствия</p>
                            <p className="text-xs text-gray-600 mt-1">Формирование и выдача аттестационной документации</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/40 text-center">
                        <div className="text-2xl font-bold text-blue-700">42</div>
                        <p className="text-xs text-gray-700 mt-1">Аттестовано в 2024</p>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/40 text-center">
                        <div className="text-2xl font-bold text-blue-700">18</div>
                        <p className="text-xs text-gray-700 mt-1">В процессе</p>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/40 text-center">
                        <div className="text-2xl font-bold text-blue-700">7</div>
                        <p className="text-xs text-gray-700 mt-1">Переаттестация</p>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('knd')} onOpenChange={() => toggleSection('knd')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-red-700 to-red-800">
                          <Icon name="ShieldAlert" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">КНД (Контрольно-надзорная деятельность)</CardTitle>
                          <CardDescription className="text-base">Контроль за соблюдением законодательства в области защиты информации</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('knd') ? 'ChevronUp' : 'ChevronDown'} 
                        size={28}
                        className="text-gray-600"
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Building2" size={20} className="text-red-700" />
                          Контроль организаций
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Надзор за соблюдением требований по защите информации</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Защита персональных данных
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Защита государственной тайны
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Защита конфиденциальной информации
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Соответствие лицензионным требованиям
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Globe" size={20} className="text-red-700" />
                          Контроль портала «Госуслуги»
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Специализированный надзор за защитой информации на ЕПГУ</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Защита персональных данных граждан
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Аудит безопасности платформы
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Проверка интеграций с ведомствами
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            Контроль инцидентов безопасности
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-red-50/80 to-orange-50/60 border border-red-200/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="BarChart3" size={20} className="text-red-700" />
                        Статистика КНД за 2024 год
                      </h4>
                      <div className="grid grid-cols-4 gap-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-700">247</div>
                          <p className="text-xs text-gray-700 mt-1">Проверок проведено</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-700">89</div>
                          <p className="text-xs text-gray-700 mt-1">Нарушений выявлено</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-700">34</div>
                          <p className="text-xs text-gray-700 mt-1">Предписаний выдано</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-700">12.4₽</div>
                          <p className="text-xs text-gray-700 mt-1">Штрафов (млн руб.)</p>
                        </div>
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
                          <CardDescription className="text-base">Разработка и анализ нормативных документов</CardDescription>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="FileEdit" size={20} className="text-gray-700" />
                          Разработка нормативных документов
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Подготовка и утверждение документов в области ИБ</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Проекты приказов ФСТЭК
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Методические рекомендации
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Технические требования
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Разъяснения по применению НПА
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="GitCompare" size={20} className="text-gray-700" />
                          Сравнительный анализ документов
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">ИИ-анализ редакций и выявление изменений</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Построчное сравнение версий
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Семантический анализ изменений
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Формирование отчёта об изменениях
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
                            Визуализация различий
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-50/80 to-slate-50/60 border border-gray-200/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-gray-700" />
                        Анализ на соответствие вышестоящим НПА
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">Автоматическая проверка документов на соответствие иерархии законодательства</p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="p-3 rounded-xl bg-white/80 text-center">
                          <Icon name="FileText" size={24} className="mx-auto mb-2 text-gray-700" />
                          <p className="text-xs font-medium">Анализ иерархии</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/80 text-center">
                          <Icon name="AlertCircle" size={24} className="mx-auto mb-2 text-amber-600" />
                          <p className="text-xs font-medium">Выявление противоречий</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/80 text-center">
                          <Icon name="Lightbulb" size={24} className="mx-auto mb-2 text-blue-600" />
                          <p className="text-xs font-medium">Рекомендации</p>
                        </div>
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
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-800">
                          <Icon name="Radio" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Противодействие техническим разведкам</CardTitle>
                          <CardDescription className="text-base">Дашборд мероприятий по уровням власти</CardDescription>
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
                          <Icon name="Landmark" size={32} className="mx-auto mb-2 text-red-700" />
                          <div className="text-3xl font-bold text-red-700 mb-1">156</div>
                          <div className="text-sm text-gray-700">Федеральный уровень</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-300/40 text-center">
                          <Icon name="MapPin" size={32} className="mx-auto mb-2 text-amber-700" />
                          <div className="text-3xl font-bold text-amber-700 mb-1">892</div>
                          <div className="text-sm text-gray-700">Региональный уровень</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-500/20 to-gray-600/20 border border-gray-300/40 text-center">
                          <Icon name="Building" size={32} className="mx-auto mb-2 text-gray-700" />
                          <div className="text-3xl font-bold text-gray-700 mb-1">2,341</div>
                          <div className="text-sm text-gray-700">Местный уровень</div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="BarChart3" size={20} className="text-purple-700" />
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

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/60 border border-purple-200/40">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Выполнено в срок</span>
                            <Icon name="TrendingUp" size={18} className="text-green-600" />
                          </div>
                          <div className="text-2xl font-bold text-purple-700">94.2%</div>
                        </div>
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/60 border border-purple-200/40">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Средний срок</span>
                            <Icon name="Clock" size={18} className="text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-purple-700">18 дней</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            <Collapsible open={expandedSections.includes('digital')} onOpenChange={() => toggleSection('digital')}>
              <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-xl rounded-3xl overflow-hidden">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700">
                          <Icon name="Mic" className="text-white" size={28} />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-2xl">Цифровой офис</CardTitle>
                          <CardDescription className="text-base">Автопротоколирование ВКС и формирование поручений</CardDescription>
                        </div>
                      </div>
                      <Icon 
                        name={expandedSections.includes('digital') ? 'ChevronUp' : 'ChevronDown'} 
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
                          <Icon name="Video" size={20} className="text-cyan-600" />
                          Автопротоколирование ВКС
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">ИИ-обработка видеоконференций с распознаванием речи и выделением ключевых моментов</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Транскрипция аудио в текст
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Распознавание участников
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Выделение ключевых тем
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Генерация протокола совещания
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 border border-white/40">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="ListChecks" size={20} className="text-cyan-600" />
                          Формирование поручений
                        </h4>
                        <p className="text-sm text-gray-700 mb-3">Автоматическое создание перечня поручений на основе протокола</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Извлечение поручений из текста
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Определение ответственных лиц
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Установка сроков исполнения
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                            Постановка задач в систему
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-blue-50/60 border border-cyan-200/40">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="Activity" size={20} className="text-cyan-700" />
                        Статистика Цифрового офиса
                      </h4>
                      <div className="grid grid-cols-4 gap-3">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-700">127</div>
                          <p className="text-xs text-gray-700 mt-1">ВКС обработано</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-700">428</div>
                          <p className="text-xs text-gray-700 mt-1">Поручений создано</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-700">89%</div>
                          <p className="text-xs text-gray-700 mt-1">Точность распознавания</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-cyan-700">12 мин</div>
                          <p className="text-xs text-gray-700 mt-1">Среднее время обработки</p>
                        </div>
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
