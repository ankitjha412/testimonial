// import { useEffect, useState } from "react";
// import { getTestimonials } from "../api/testimonialApi";
// import TestimonialCard from "../components/TestimonialCard";
// import Loader from "../components/Loader";
// import { Grid, Container, Typography, Box, useTheme } from "@mui/material";

// function Home() {
//   const theme = useTheme();
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [query, setQuery] = useState("");


//   useEffect(() => {
//     getTestimonials()
//       .then((res) => {
//         console.log("✅ API Response:", res.data);
//         setTestimonials(res.data);
//          setFiltered(res.data); 
//       })
//       .catch((err) => {
//         console.error("❌ Error fetching testimonials:", err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <Loader />;

//   if (testimonials.length === 0) {
//     return (
//       <Container sx={{ mt: 6 }}>
//         <Typography variant="h6" align="center" color="text.secondary">
//           No approved testimonials yet.
//         </Typography>
//       </Container>
//     );
//   }

//   const handleSearch = () => {
//     if (!query.trim()) {
//       setFiltered(testimonials); // reset if empty
//     } else {
//       const q = query.toLowerCase();
//       const result = testimonials.filter(
//         (t) =>
//           t.fullName?.toLowerCase().includes(q) ||
//           t.title?.toLowerCase().includes(q) ||
//           t.email?.toLowerCase().includes(q)
//       );
//       setFiltered(result);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "70vh",
//         background: theme.palette.background.default, // ✅ use theme background
//         py: { xs: 4, md: 8 },
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* ✅ Page Header */}
//         <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
//           <Typography
//             variant="h3"
//             fontWeight={700}
//             sx={{
//               color: theme.palette.primary.dark, // ✅ deep blue for header
//               mb: 1,
//               fontSize: { xs: "2rem", md: "2.5rem" },
//             }}
//           >
//             What People Say
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               maxWidth: 600,
//               mx: "auto",
//               color: theme.palette.text.secondary, // ✅ consistent muted gray
//               fontSize: { xs: "0.95rem", md: "1.05rem" },
//             }}
//           >
//             Read authentic feedback and testimonials from our valued users. 
//             Every testimonial is carefully reviewed to ensure quality and trust.
//           </Typography>
//         </Box>
        
//           {/* ✅ Search Bar */}
//        <Box
//          display="flex"
//          justifyContent="center"
//          alignItems="center"
//          gap={2}
//          mb={4}
//          flexWrap="wrap"
//        >
//          <input
//            type="text"
//            placeholder="Search by name, title, or email..."
//            value={query}
//            onChange={(e) => setQuery(e.target.value)}
//            style={{
//              padding: "10px 14px",
//              borderRadius: "8px",
//              border: "1px solid #ccc",
//              minWidth: "250px",
//              flex: "1",
//              fontSize: "1rem",
//            }}
//          />
//          <Button
//            variant="contained"
//            onClick={handleSearch}
//            sx={{ borderRadius: 2, px: 3, py: 1 }}
//          >
//            Search
//          </Button>
//        </Box>
//         {/* ✅ Testimonials Grid */}
//         <Grid container spacing={4}>
//           {filtered.map((t, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={t._id}
//               sx={{
//                 animation: "fadeUp 0.6s ease forwards",
//                 animationDelay: `${index * 0.15}s`,
//                 opacity: 0,
//                 "@keyframes fadeUp": {
//                   from: { opacity: 0, transform: "translateY(20px)" },
//                   to: { opacity: 1, transform: "translateY(0)" },
//                 },
//               }}
//             >
//               <TestimonialCard testimonial={t} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default Home;





import { useEffect, useState } from "react";
import { getTestimonials } from "../api/testimonialApi";
import TestimonialCard from "../components/TestimonialCard";
import Loader from "../components/Loader";
import {
  Grid,
  Container,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

function Home() {
  const theme = useTheme();
  const [testimonials, setTestimonials] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // Fetch testimonials
  useEffect(() => {
    getTestimonials()
      .then((res) => {
        console.log("✅ API Response:", res.data);
        setTestimonials(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching testimonials:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Auto filter whenever query changes
  useEffect(() => {
    if (!query.trim()) {
      setFiltered(testimonials);
    } else {
      const q = query.toLowerCase();
      const result = testimonials.filter(
        (t) =>
          t.fullName?.toLowerCase().includes(q) ||
          t.title?.toLowerCase().includes(q) ||
          t.email?.toLowerCase().includes(q)
      );
      setFiltered(result);
    }
  }, [query, testimonials]);

  if (loading) return <Loader />;

  if (testimonials.length === 0) {
    return (
      <Container sx={{ mt: 6 }}>
        <Typography variant="h6" align="center" color="text.secondary">
          No approved testimonials yet.
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "70vh",
        background: theme.palette.background.default,
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* ✅ Page Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              color: theme.palette.primary.dark,
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            What People Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              mx: "auto",
              color: theme.palette.text.secondary,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Read authentic feedback and testimonials from our valued users. Every testimonial is carefully reviewed to ensure quality and trust.
          </Typography>
        </Box>

        {/* ✅ Live Search Bar */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          <input
            type="text"
            placeholder="Search by name, title, or email..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              minWidth: "300px",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "400px",
            }}
          />
        </Box>

        {/* ✅ Testimonials Grid */}
        <Grid container spacing={4}>
          {filtered.map((t, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={t._id}
              sx={{
                animation: "fadeUp 0.6s ease forwards",
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
                "@keyframes fadeUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <TestimonialCard testimonial={t} />
            </Grid>
          ))}
        </Grid>

        {/* ✅ No results message */}
        {filtered.length === 0 && (
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mt: 4 }}
          >
            No testimonials match your search.
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default Home;
