window.EXAM_CONFIG = {
  appTitle: "سامانه آزمون آنلاین",
  examId: "tizhooshan-stage-1",
  examTitle: "آزمون مرحله اول آمادگی آزمون تیزهوشان",
  durationMinutes: 65,
  questionCount: 48,
  questionStartNumber: 76,
  optionsPerQuestion: 4,
  pdfFile: "assets/question1.pdf",
  examEnabled: true,
  negativeMarking: {
    enabled: true,
    wrongPenalty: 1 / 3
  },
  accounts: [
    { username: "T", password: "T", role: "tester", displayName: "حساب آزمایشی" },
    { username: "stu", password: "1234", role: "student", displayName: "دانش‌آموز" },
    { username: "ASHRAF", password: "1234", role: "admin", displayName: "مدیر سامانه" }
  ]
};
