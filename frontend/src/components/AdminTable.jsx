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
        boxShadow: "0px 6px 18px rgba(0,0,0,0.08)",
        animation: "fadeIn 0.6s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      <Table>
        {/* ----- Table Head ----- */}
        <TableHead >
          <TableRow
            sx={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)", // gradient purple → blue
            }}
          >
            {["Name", "Title", "Rating", "Status", "Actions"].map((header) => (
              <TableCell
                key={header}
                align={header === "Actions" ? "right" : "left"}
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* ----- Table Body ----- */}
        <TableBody>
          {testimonials.map((t, index) => (
            <TableRow
              key={t._id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#f9fafc" : "#ffffff",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#ebf4ff",
                  transform: "scale(1.01)",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                },
              }}
            >
              <TableCell  sx={{ fontWeight: 500  }}>{t.fullName}</TableCell>
              <TableCell>{t.title}</TableCell>
              <TableCell
                sx={{
                  fontWeight: 700,
                  color: "#ff9800",
                  textShadow: "0px 0px 4px rgba(255,152,0,0.4)",
                }}
              >
                ⭐ {t.rating}
              </TableCell>
              <TableCell>
                <StatusBadge status={t.status} />
              </TableCell>
              <TableCell align="right">
                {/* Approve Button */}
                <Button
                  size="small"
                  onClick={() => onApprove(t._id)}
                  sx={{
                    mr: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    background: "linear-gradient(90deg, #38a169, #48bb78)",
                    color: "white",
                    boxShadow: "0px 3px 6px rgba(56,161,105,0.4)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      background: "linear-gradient(90deg, #2f855a, #38a169)",
                      boxShadow: "0px 5px 14px rgba(56,161,105,0.6)",
                    },
                  }}
                >
                  Approve
                </Button>

                {/* Reject Button */}
                <Button
                  size="small"
                  onClick={() => onReject(t._id)}
                  sx={{
                    mr: 1,
                    px: 2,
                    py: 0.5,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    background: "linear-gradient(90deg, #ed8936, #e53e3e)",
                    color: "white",
                    boxShadow: "0px 3px 6px rgba(229,62,62,0.35)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      background: "linear-gradient(90deg, #c53030, #dd6b20)",
                      boxShadow: "0px 5px 14px rgba(229,62,62,0.5)",
                    },
                  }}
                >
                   Reject
                </Button>

                {/* Delete Button */}
                <Button
                  size="small"
                  onClick={() => onDelete(t._id)}
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    background: "linear-gradient(90deg, #e53e3e, #c53030)",
                    color: "white",
                    boxShadow: "0px 3px 6px rgba(229,62,62,0.35)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "scale(1.08)",
                      background: "linear-gradient(90deg, #9b2c2c, #c53030)",
                      boxShadow: "0px 5px 14px rgba(229,62,62,0.6)",
                    },
                  }}
                >
                  Delete
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
