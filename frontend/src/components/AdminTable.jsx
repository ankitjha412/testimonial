import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper,
  TableContainer,
} from "@mui/material";
import StatusBadge from "./StatusBadge";

function AdminTable({ testimonials, onApprove, onReject, onDelete }) {
  return (
    <TableContainer
      component={Paper}
      elevation={6}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
        animation: "fadeIn 0.6s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Table>
        {/* ----- Table Head ----- */}
       <TableHead>
  <TableRow
    sx={{
      background: "linear-gradient(90deg, #6a11cb, #2575fc)", // gradient purple → blue
    }}
  >
    <TableCell
      sx={{
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        letterSpacing: 1,
      }}
    >
      Name
    </TableCell>
    <TableCell
      sx={{
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        letterSpacing: 1,
      }}
    >
      Title
    </TableCell>
    <TableCell
      sx={{
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        letterSpacing: 1,
      }}
    >
      Rating
    </TableCell>
    <TableCell
      sx={{
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        letterSpacing: 1,
      }}
    >
      Status
    </TableCell>
    <TableCell
      align="right"   // ✅ This matches body cell alignment
      sx={{
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        letterSpacing: 1,
      }}
    >
      Actions
    </TableCell>
  </TableRow>
</TableHead>


        {/* ----- Table Body ----- */}
        <TableBody>
          {testimonials.map((t, index) => (
            <TableRow
              key={t._id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "#ffffff",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #fdfbfb, #ebedee)",
                  transform: "scale(1.01)",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                },
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>{t.fullName}</TableCell>
              <TableCell>{t.title}</TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#ff9800",
                  textShadow: "0px 0px 3px rgba(255,152,0,0.5)",
                }}
              >
                ⭐ {t.rating}
              </TableCell>
              <TableCell>
                <StatusBadge status={t.status} />
              </TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  sx={{
                    mr: 1,
                    textTransform: "none",
                    borderRadius: 3,
                    boxShadow: "0px 3px 6px rgba(76,175,80,0.4)",
                    transition: "0.25s",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: "0px 5px 12px rgba(76,175,80,0.6)",
                    },
                  }}
                  onClick={() => onApprove(t._id)}
                >
                  ✅ Approve
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="warning"
                  sx={{
                    mr: 1,
                    textTransform: "none",
                    borderRadius: 3,
                    boxShadow: "0px 3px 6px rgba(255,152,0,0.4)",
                    transition: "0.25s",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: "0px 5px 12px rgba(255,152,0,0.6)",
                    },
                  }}
                  onClick={() => onReject(t._id)}
                >
                  ⚠ Reject
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    borderRadius: 3,
                    boxShadow: "0px 3px 6px rgba(244,67,54,0.4)",
                    transition: "0.25s",
                    "&:hover": {
                      transform: "scale(1.08)",
                      boxShadow: "0px 5px 12px rgba(244,67,54,0.6)",
                    },
                  }}
                  onClick={() => onDelete(t._id)}
                >
                  ❌ Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminTable;
