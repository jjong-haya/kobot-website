# Security Policy

## 🔒 보안 정책

### 민감한 정보 보호

이 프로젝트는 Public 저장소입니다. **절대로 다음을 커밋하지 마세요:**

- ❌ `.env` 파일 (Supabase API keys)
- ❌ 데이터베이스 비밀번호
- ❌ API 키 또는 토큰
- ❌ 개인 식별 정보 (PII)
- ❌ 인증서 또는 키 파일

### 환경 변수 사용

모든 민감한 정보는 환경 변수로 관리:

```env
# .env 파일 (Git에 커밋되지 않음)
VITE_SUPABASE_URL=your-url-here
VITE_SUPABASE_ANON_KEY=your-key-here
```

### 보안 체크리스트

커밋 전 확인사항:

- [ ] `.env` 파일이 `.gitignore`에 포함되어 있는가?
- [ ] 코드에 하드코딩된 API 키가 없는가?
- [ ] 개인정보가 포함된 데이터가 없는가?
- [ ] `git status`로 `.env` 파일이 표시되지 않는가?

### 보안 취약점 발견 시

보안 취약점을 발견하셨다면:

1. **공개 이슈로 제기하지 마세요**
2. 이메일로 직접 연락: [security@kobot.com]
3. 가능한 한 자세히 설명
4. 24-48시간 내 응답 예정

### Supabase RLS (Row Level Security)

데이터베이스 접근 보안:

- ✅ 모든 테이블에 RLS 활성화
- ✅ 인증된 사용자만 데이터 접근
- ✅ 역할 기반 권한 관리

### 정기 보안 점검

- GitHub Dependabot 활성화
- 월 1회 보안 업데이트 확인
- 분기별 전체 보안 감사

---

## 🚨 민감한 정보를 커밋했다면?

### 즉시 조치사항:

1. **API 키 재생성**
   ```
   Supabase Dashboard → Settings → API → Reset Keys
   ```

2. **Git 히스토리에서 제거**
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch .env" \
     --prune-empty --tag-name-filter cat -- --all
   
   git push origin --force --all
   ```

3. **모든 팀원에게 알림**

### 예방 조치:

- Pre-commit hook 사용
- 정기적인 코드 리뷰
- 자동화된 시크릿 스캔

---

## 📞 문의

보안 관련 문의: security@kobot.com
