export default function Home() {
  return (
    <>
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider" style={{ color: "var(--charcoal)" }}>
            LIVE<span style={{ color: "var(--warm)" }}>.</span>
          </a>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#portfolio" className="hover:text-gray-900">시공 사례</a>
            <a href="#service" className="hover:text-gray-900">서비스</a>
            <a href="#process" className="hover:text-gray-900">진행 과정</a>
            <a href="#contact" className="hover:text-gray-900">문의</a>
          </div>
          <a href="tel:02-9876-5432" className="text-sm font-medium" style={{ color: "var(--warm)" }}>
            02-9876-5432
          </a>
        </div>
      </nav>

      {/* 히어로 */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80') center/cover",
        }}
      >
        <div className="text-center px-4">
          <p className="text-sm tracking-[0.4em] mb-4 opacity-70">INTERIOR DESIGN & CONSTRUCTION</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">공간을 새롭게,<br />일상을 다르게</h1>
          <p className="text-lg font-light mb-8 opacity-80">주거·상업 공간 인테리어 전문 | 리브 인테리어</p>
          <a href="#contact" className="btn-gold inline-block">무료 상담 신청</a>
        </div>
      </section>

      {/* 시공 사례 */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-center mb-2" style={{ color: "var(--warm)" }}>PORTFOLIO</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">시공 사례</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "photo-1600210492486-724fe5c67fb3", title: "성수동 30평 아파트", tag: "주거 | 모던" },
              { img: "photo-1600607687939-ce8a6c25118c", title: "강남 카페 인테리어", tag: "상업 | 카페" },
              { img: "photo-1600566753190-17f0baa2a6c3", title: "판교 오피스 리모델링", tag: "상업 | 오피스" },
              { img: "photo-1616486338812-3dadae4b4ace", title: "한남동 25평 신혼집", tag: "주거 | 미니멀" },
              { img: "photo-1600585154340-be6161a56a0c", title: "이태원 레스토랑", tag: "상업 | 식당" },
              { img: "photo-1600573472556-e636c2acda9e", title: "분당 40평 리모델링", tag: "주거 | 내추럴" },
            ].map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div
                  className="h-64 rounded-lg overflow-hidden bg-gray-200 mb-3"
                  style={{
                    background: `url('https://images.unsplash.com/${item.img}?w=600&q=80') center/cover`,
                  }}
                />
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section id="service" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-center mb-2" style={{ color: "var(--warm)" }}>SERVICE</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">서비스 안내</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "주거 인테리어", desc: "아파트, 빌라, 원룸 등 주거 공간 전체 또는 부분 리모델링. 설계부터 시공까지.", price: "평당 80~150만원" },
              { title: "상업 인테리어", desc: "카페, 식당, 사무실, 매장 등 상업 공간. 컨셉 기획부터 준공까지 원스톱.", price: "평당 100~200만원" },
              { title: "부분 시공", desc: "주방, 욕실, 바닥 등 부분 시공. 필요한 곳만 깔끔하게.", price: "별도 견적" },
            ].map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--charcoal)" }}>{s.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                <p className="text-sm font-medium" style={{ color: "var(--warm)" }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 과정 */}
      <section id="process" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-center mb-2" style={{ color: "var(--warm)" }}>PROCESS</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">진행 과정</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", title: "상담", desc: "무료 방문 상담\n요구사항 파악" },
              { step: "02", title: "설계", desc: "3D 도면 제작\n자재 선정" },
              { step: "03", title: "시공", desc: "전담 현장 관리\n주 1회 보고" },
              { step: "04", title: "완공", desc: "최종 점검\nA/S 1년 보장" },
            ].map((p) => (
              <div key={p.step}>
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-white text-lg font-bold mb-3"
                  style={{ background: "var(--warm)" }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold mb-1">{p.title}</h3>
                <p className="text-xs text-gray-500 whitespace-pre-line">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] mb-2" style={{ color: "var(--warm)" }}>CONTACT</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">무료 상담 신청</h2>
          <p className="text-gray-500 mb-8">전화 또는 카카오톡으로 편하게 문의하세요.<br />48시간 내 답변드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02-9876-5432" className="btn-gold inline-block text-center">
              전화 상담
            </a>
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3.5 rounded text-sm font-medium border-2 hover:bg-gray-50 transition-colors text-center"
              style={{ borderColor: "var(--warm)", color: "var(--warm)" }}
            >
              카카오톡 문의
            </a>
          </div>
          <div className="mt-10 text-sm text-gray-400 space-y-1">
            <p>서울특별시 강남구 테헤란로 123, 5층</p>
            <p>평일 09:00 - 18:00 | 주말·공휴일 휴무</p>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-8 px-4 text-center text-sm" style={{ background: "var(--charcoal)" }}>
        <p className="text-white/50">&copy; 2026 리브 인테리어 (LIVE Interior). All rights reserved.</p>
        <p className="text-white/30 mt-1 text-xs">사업자등록번호 234-56-78901</p>
      </footer>
    </>
  );
}
