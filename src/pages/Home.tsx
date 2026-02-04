import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Calendar, Search, Code2, Users, Trophy, BookOpen, Bell } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>('프로젝트');
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const recentNotices = [
    { id: 1, title: '2026년 1학기 정기 총회 안내', date: '2026.02.01', category: '공지' },
    { id: 2, title: '신입 부원 모집 안내', date: '2026.02.03', category: '모집' },
    { id: 3, title: '로봇 경진대회 참가 신청', date: '2026.01.28', category: '대회' },
    { id: 4, title: '장비 대여 규정 업데이트', date: '2026.01.25', category: '공지' },
  ];

  const upcomingEvents = [
    { id: 1, title: '정기 총회', date: '02.15', day: '토', time: '18:00', location: '공학관 301호' },
    { id: 2, title: '신입생 오리엔테이션', date: '02.22', day: '토', time: '17:00', location: '동아리방' },
    { id: 3, title: '로봇 제작 워크샵', date: '03.05', day: '수', time: '14:00', location: '실습실' },
  ];

  // Calendar helper functions
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-based (0 = January)

  // Full events data with complete dates
  const allEvents = [
    { id: 1, title: '정기 총회', fullDate: new Date(2026, 1, 15), day: '토', time: '18:00', location: '공학관 301호' },
    { id: 2, title: '신입생 오리엔테이션', fullDate: new Date(2026, 1, 22), day: '토', time: '17:00', location: '동아리방' },
    { id: 3, title: '로봇 제작 워크샵', fullDate: new Date(2026, 2, 5), day: '수', time: '14:00', location: '실습실' },
    { id: 4, title: '정기 회의', fullDate: new Date(2026, 1, 8), day: '일', time: '15:00', location: '동아리방' },
    { id: 5, title: '신입생 면접', fullDate: new Date(2026, 1, 28), day: '토', time: '10:00', location: '공학관 201호' },
    { id: 6, title: '알고리즘 스터디', fullDate: new Date(2026, 1, 12), day: '목', time: '19:00', location: '도서관 3층' },
  ];

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return allEvents.filter(event => 
      event.fullDate.getDate() === date.getDate() &&
      event.fullDate.getMonth() === date.getMonth() &&
      event.fullDate.getFullYear() === date.getFullYear()
    );
  };

  // Check if a date has events
  const hasEvents = (date: Date) => {
    return getEventsForDate(date).length > 0;
  };

  // Get displayed events (filtered by selected date or upcoming)
  const displayedEvents = selectedDate 
    ? getEventsForDate(selectedDate)
    : allEvents.filter(event => event.fullDate >= currentDate).slice(0, 3);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const activities = [
    { 
      icon: Code2, 
      title: '프로젝트', 
      count: '30+', 
      color: 'teal',
      images: [
        'https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1563164892-b5ee2f08c144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      description: '하드웨어와 소프트웨어를 결합한 로봇 제작 프로젝트'
    },
    { 
      icon: BookOpen, 
      title: '스터디', 
      count: '12회', 
      color: 'green',
      images: [
        'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      description: 'AI, 임베디드, 제어공학 등 정기 세미나'
    },
    { 
      icon: Trophy, 
      title: '대회 수상', 
      count: '15회', 
      color: 'peach',
      images: [
        'https://images.unsplash.com/photo-1580232494717-d985340cb739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1556740758-90de374c12ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      description: '국내외 로봇 경진대회 참가 및 수상'
    },
    { 
      icon: Users, 
      title: '활동 부원', 
      count: '50명', 
      color: 'gray',
      images: [
        'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      description: '함께 성장하는 열정적인 동아리 부원들'
    },
  ];

  const categories = [
    { name: '프로젝트', active: false },
    { name: '스터디', active: false },
    { name: '대회', active: false },
    { name: '행사', active: false },
    { name: '모집', active: true },
  ];

  const mainNotice = {
    id: 1,
    title: '2026년 1학기 신입 부원 모집',
    description: '로봇에 관심있는 학우 여러분을 초대합니다',
    date: '2026.02.03',
    deadline: '2026.02.28',
    isImportant: true
  };

  // Hero carousel images
  const heroImages = [
    { color: '#4A7C59', label: '로봇 프로젝트' },
    { color: '#85B09A', label: '스터디' },
    { color: '#8FB569', label: '대회 수상' },
    { color: '#E8B992', label: '워크샵' },
    { color: '#F2D7BD', label: '동아리 활동' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <section className="bg-white border-b border-gray-200 py-20">
        <div className="container mx-auto px-8 max-w-7xl">
          {/* Top: Title + Image Carousel */}
          <div className="grid grid-cols-2 gap-8 mb-8 items-start">
            {/* Left: Title */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                All the Activities<br />on KOBOT!
              </h1>
              <p className="text-lg text-gray-600">
                국민대학교 로봇 동아리 KOBOT의 모든 활동을 확인하세요.
              </p>
            </div>

            {/* Right: Image Carousel */}
            <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[320px]">
                <Slider {...sliderSettings}>
                  {heroImages.map((image, index) => (
                    <div key={index} className="relative h-[320px]">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundColor: image.color,
                          borderRadius: '16px'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                        {image.label}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* Bottom: Search + Main Notice */}
          <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <input
                type="text"
                placeholder="활동이나 키워드로 검색해보세요"
                className="w-full h-14 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    category.active
                      ? 'bg-[#4A7C59] hover:bg-[#3D6B4A] text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </Badge>
              ))}
            </div>

            {/* Main Notice Card */}
            <Link to={`/notices/${mainNotice.id}`}>
              <div className="relative bg-gradient-to-br from-[#4A7C59] to-[#5A8F6A] rounded-2xl p-6 text-white hover:shadow-xl transition-all group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Bell className="size-5" />
                    <span className="text-sm font-semibold">메인 공지</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:scale-[1.02] transition-transform">
                    {mainNotice.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm mb-4">
                    {mainNotice.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <span className="text-xs text-white/80">
                      마감일: {mainNotice.deadline}
                    </span>
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section 
        id="stats-section"
        ref={(el) => (sectionRefs.current['stats-section'] = el)}
        className={`py-12 bg-white border-b border-gray-200 transition-all duration-700 ${
          visibleSections.has('stats-section') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const isSelected = selectedActivity === activity.title;
              return (
                <div
                  key={activity.title}
                  onClick={() => setSelectedActivity(isSelected ? null : activity.title)}
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected ? 'shadow-lg scale-105' : 'hover:shadow-md'
                  } ${
                    activity.color === 'teal' ? 'border-[#85B09A] bg-[#F5F9F7]' :
                    activity.color === 'green' ? 'border-[#8FB569] bg-[#F7FAF4]' :
                    activity.color === 'peach' ? 'border-[#E8B992] bg-[#FFF9F2]' :
                    'border-gray-300 bg-gray-50'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <Icon
                    className={
                      activity.color === 'teal' ? 'size-7 mb-3 text-[#4A7C59]' :
                      activity.color === 'green' ? 'size-7 mb-3 text-[#5A8F42]' :
                      activity.color === 'peach' ? 'size-7 mb-3 text-[#D89960]' :
                      'size-7 mb-3 text-gray-600'
                    }
                  />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {activity.count}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activity.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Gallery */}
          {selectedActivity && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500">
              {activities
                .filter(activity => activity.title === selectedActivity)
                .map((activity) => (
                  <div key={activity.title} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                    
                    {/* Photo Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {activity.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform"
                          style={{
                            animation: `fadeInUp 0.4s ease-out ${index * 80}ms both`
                          }}
                        >
                          <img
                            src={image}
                            alt={`${activity.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white text-sm font-medium">
                                {activity.title} #{index + 1}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content Grid */}
      <section 
        id="content-section"
        ref={(el) => (sectionRefs.current['content-section'] = el)}
        className={`py-16 transition-all duration-700 delay-200 ${
          visibleSections.has('content-section') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 캘린더 */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">일정 캘린더</h2>
                {selectedDate && (
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="text-sm text-[#4A7C59] hover:text-[#3D6B4A] transition-colors"
                  >
                    전체 일정 보기
                  </button>
                )}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                {/* Calendar Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                    {currentYear}년 {monthNames[currentMonth]}
                  </h3>
                  
                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className={`text-center text-xs font-semibold py-2 ${
                          day === '일' ? 'text-red-500' :
                          day === '토' ? 'text-blue-500' :
                          'text-gray-600'
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}
                  
                  {/* Actual days */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const dateObj = new Date(currentYear, currentMonth, day);
                    const isToday = 
                      day === currentDate.getDate() &&
                      currentMonth === currentDate.getMonth() &&
                      currentYear === currentDate.getFullYear();
                    const hasEvent = hasEvents(dateObj);
                    const isSelected = selectedDate && 
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === currentMonth &&
                      selectedDate.getFullYear() === currentYear;
                    const dayOfWeek = dateObj.getDay();

                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(isSelected ? null : dateObj)}
                        className={`
                          aspect-square p-2 rounded-xl text-sm font-medium
                          transition-all duration-200 relative
                          ${isSelected 
                            ? 'bg-[#4A7C59] text-white shadow-lg scale-105' 
                            : isToday
                            ? 'bg-[#E8F5E9] text-[#4A7C59] border-2 border-[#4A7C59]'
                            : hasEvent
                            ? 'bg-[#F5F9F7] text-gray-900 hover:bg-[#E8F5E9] hover:scale-105'
                            : 'text-gray-700 hover:bg-gray-50 hover:scale-105'
                          }
                          ${dayOfWeek === 0 && !isSelected && !isToday ? 'text-red-500' : ''}
                          ${dayOfWeek === 6 && !isSelected && !isToday ? 'text-blue-500' : ''}
                        `}
                      >
                        {day}
                        {hasEvent && !isSelected && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#4A7C59] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 일정 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedDate 
                  ? `${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일 일정`
                  : '다가오는 일정'
                }
              </h2>

              <div className="space-y-4">
                {displayedEvents.length > 0 ? (
                  displayedEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#85B09A]/30 hover:shadow-lg transition-all duration-300"
                      style={{
                        animation: visibleSections.has('content-section') 
                          ? `fadeInUp 0.5s ease-out ${index * 100}ms both` 
                          : 'none'
                      }}
                    >
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] rounded-2xl flex-shrink-0">
                          <div className="text-xs text-[#4A7C59]/70 font-medium">{event.day}</div>
                          <div className="text-xl font-bold text-[#4A7C59]">
                            {event.fullDate.getDate()}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-2 leading-relaxed">
                            {event.title}
                          </h3>
                          <div className="text-sm text-gray-500 space-y-1">
                            <div className="flex items-center gap-2">
                              <Calendar className="size-4 text-gray-400" />
                              {event.time}
                            </div>
                            <div className="text-gray-400">{event.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
                    <Calendar className="size-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">이 날짜에 예정된 일정이 없습니다.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slick Carousel Custom Styles */
        .slick-dots {
          bottom: 16px;
        }

        .slick-dots li {
          margin: 0 3px;
        }

        .slick-dots li button:before {
          font-size: 8px;
          color: white;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}