import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";

export default function ProjectPage({ project }: { project: Project }) {
  const firstImages = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA1OTU1LCJleHAiOjE4MTYzNDE5NTV9.uMV8UgonTV0tToznpbelLKOMLIssrEBsYhjQP0iji7w",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMi5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA1OTgxLCJleHAiOjE4MTYzNDE5ODF9.C6_lR1kpGb9w8l6tbHg9N519l6yI7cfqWCYK8F-rJ2U",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA4MDA1LCJleHAiOjE4MTYzNDQwMDV9.bCqkXhuAua74ZML127Iov3Fx4yW_do1hAKfDTmhqICM",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries/useNow.png",
  ];

  const zineSlides1 = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvNC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2MjYxLCJleHAiOjE4MTYzNDIyNjF9.FWBtNA-d1ybLN5OfawOdLFtzXPjgHqcSFoOmJkMclEM",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvNS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2MzQwLCJleHAiOjE4MTYzNDIzNDB9.hzq-9m9olWkE-ACfz4qIYbeka-PvQE0uSme7g1qm7Ek",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvNi5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2MzczLCJleHAiOjE4MTYzNDIzNzN9.NqfFE0vcbDCfZ7OKC79lQn-1wG7kMZ3XNOwtY-UbNM4",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvNy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2NDMzLCJleHAiOjE4MTYzNDI0MzN9.CTWYT1YiS0Q_9E0AfCJeqbTTD3F6SrMVyvpXAOBx9hk",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvNy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2NDMzLCJleHAiOjE4MTYzNDI0MzN9.CTWYT1YiS0Q_9E0AfCJeqbTTD3F6SrMVyvpXAOBx9hk",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/9.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvOS5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg0ODA2NTIzLCJleHAiOjE4MTYzNDI1MjN9.rnJxkpy2KfscsQHNSJUCR5KXYAKCygH-YOFnYCoPQnM",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/10.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTAuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjY2MywiZXhwIjoxODE2MzQyNjYzfQ.kLr1RlIBVU4uRTzEu8EFBZR-hadMEz8dKYdBoPFs_5I",
  ];

  const zineSlides2 = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/18.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTguanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzMwMywiZXhwIjoxODE2MzQzMzAzfQ.0a9OD3x-Nqo-YLpCglNi7INmSGE3F0hsL0E_oj3F8w8",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/19.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzM1NCwiZXhwIjoxODE2MzQzMzU0fQ.AeKeFkBPDM5I4mryrmcMtAkDuuqsNoDZd6hQMRUr83A",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/20.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjAuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzM5OSwiZXhwIjoxODE2MzQzMzk5fQ.2DWaGsqJU21GlNDahSc_KegTcLWYcEkEuxHa4aIQhu8",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/21.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzQzMSwiZXhwIjoxODE2MzQzNDMxfQ.2NAk5Cp_30ajkZ6c6MudeDDFNgHhqpZpJ57r_r045Co",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/22.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjIuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzQ3MSwiZXhwIjoxODE2MzQzNDcxfQ.92-6QvNjWH85WHIc9Rt6e5YMMT4u-NJgkHUvclYslu4",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/23.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjMuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzUwOCwiZXhwIjoxODE2MzQzNTA4fQ.lK4FCJw7MPZoSWLLV_Je6eVHQjF_KKA17Cg51R5C8O8",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/24.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjQuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzU0MywiZXhwIjoxODE2MzQzNTQzfQ.CtOUPnip5myaUG3C0_r5haCfZSw2lExL8JKq0Vzd1oU",
  ];

  const zineSlides3 = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/25.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjUuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzU5MCwiZXhwIjoxODE2MzQzNTkwfQ.KLruNAHGKhCh6bOPe3Ndw5_Iwwi73wqKglttIG42H3M",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/26.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjYuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzYzNCwiZXhwIjoxODE2MzQzNjM0fQ.AIYMp3C0skcIZCxfEy_YTO_SuR5hamGitv9oYmFJS4U",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/27.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjcuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzY2NiwiZXhwIjoxODE2MzQzNjY2fQ.v7gH-dY9dfD-L38qaIcIEvgd3O6A-ZSAphbZdEpyXTg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/28.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjguanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzcwOSwiZXhwIjoxODE2MzQzNzA5fQ.hAUJ7X5wOlsLEApOlSh1tXBs2AlKWnioeN8cTsolNWk",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/29.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMjkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzc0NywiZXhwIjoxODE2MzQzNzQ3fQ._WaRZdYZWuUMkX_C9-gCclOblriCI8QVPl8HZvgIm1M",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/30.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMzAuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzc3NCwiZXhwIjoxODE2MzQzNzc0fQ.knaeAFMwJ7HlTzaHCqe_VrwelZnHIqTh2r8RQWnzb94",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/31.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMzEuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzgwNiwiZXhwIjoxODE2MzQzODA2fQ.k7xTutUcL0PXzXF8sHN00MgVxhnQIS5S_zQt4LPr6Rg",
  ];

  const scansBlack = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/11.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTEuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjY0NywiZXhwIjoxODE2MzQyNjQ3fQ.3egzGtlStGJd3Yw-zfG9Fb-eggUHlalNd6SYob9amno",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/12.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTIuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjcxMCwiZXhwIjoxODE2MzQyNzEwfQ.Sr6x-A1H7Q1s1teuTjzOuu2SbW2A5OKUQvKrOzMuBk0",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/13.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTMuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjc5OSwiZXhwIjoxODE2MzQyNzk5fQ.c31dUQd0dsVDHz9MAtCiJxn4_VGf96K-00eHoOqUZag",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/14.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTQuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjgzNiwiZXhwIjoxODE2MzQyODM2fQ.4HqEXEQ1a9yJRTLFAvnTgT4dnLNwsPrf4a8EgLgkrvo",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/15.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTUuSlBHIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNjkxNSwiZXhwIjoxODE2MzQyOTE1fQ.uhut8rNMg_Vk6SeDHQeeFCbNqDT20T8iU6uH0ec-TOs",
  ];

  const scansWhite = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/16.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTYuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzE3MywiZXhwIjoxODE2MzQzMTczfQ.SVAxPt40Rx5sbA4DYN1xizdtkLwO9VPwSzjkvtTwotg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/sign/puta-diaries/17.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jMTA4NmY5YS04NjQxLTQxNGItYmVhNC0zM2QzMzhiMDQ0OWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwdXRhLWRpYXJpZXMvMTcucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NDgwNzIwOCwiZXhwIjoxODE2MzQzMjA4fQ.8itIdseANotb3R8ewqfiCQEDCwT0tqKh9xKuMQ7PghY",
  ];
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <div className="max-w-4xl mx-auto">
        <img
          src={firstImages[3]}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 text-pink-400">
        Puta Diaries is a feminist zine series exploring the experiences of
        women and those identifying as women in a patriarchal society. Focused
        on sexual harassment, the zines use anonymous submissions to spark
        dialogue and raise awareness. The series includes three risoprinted A5
        zines, each with a distinct theme, and an archive book titled Puta
        Diaries: Ghost Stories. This spiral-bound A4 book, printed on a Xerox
        V180, compiles illustrations and text from the zines, alongside new and
        previously unused material
      </p>

      <div className="flex flex-col gap-4 mt-10 ">
        <img src={firstImages[0]} alt={project.title} className="w-full" />
        <div className="flex gap-2">
          <img src={firstImages[1]} alt={project.title} className="w-1/2" />
          <img src={firstImages[2]} alt={project.title} className="w-1/2" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="mt-16 text-4xl font-bold text-red-500">Volume 1</h2>
        <SlideShow images={zineSlides1} />
      </div>

      <div className="flex gap-8 items-start mt-16">
        <p className="w-1/3 text-sm leading-relaxed text-pink-400 pt-10">
          Underwear is a personal and somewhat forbidden subject, making it an
          interesting topic to explore with my theme. Here are some of the
          results of scans I used throughout this project. The colours and
          textures created a compelling feel that lies almost in limbo between
          innocence and provocation.
        </p>
        <div className="w-2/3 flex gap-4">
          <SlideShow images={scansBlack} />
          <SlideShow images={scansWhite} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="mt-16 text-4xl font-bold text-red-500">Volume 2</h2>
        <SlideShow images={zineSlides2} />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="mt-16 text-4xl font-bold text-red-500">Volume 3</h2>
        <SlideShow images={zineSlides3} />
      </div>
    </div>
  );
}
