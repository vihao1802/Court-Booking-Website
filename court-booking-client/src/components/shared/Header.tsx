"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { navItems } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "120px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1056px",
            height: "70px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: 1,
            }}
            onClick={() => router.push("/")}
          >
            <Image src="/icons/court.png" alt="icon" height={32} width={32} />
            <Typography
              fontSize="32px"
              color="success"
              fontFamily={lato.style.fontFamily}
            >
              courtsite
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              color="success"
              onClick={() => router.push("/sign-up")}
            >
              Đăng ký
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => router.push("/sign-in")}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* menu bar */}
      <Box
        sx={{
          height: "50px",
          display: "flex",
          padding: "10px 0",
        }}
      >
        <Box
          sx={{
            width: "1056px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {navItems.map((item, index) => (
            <Link href={item.url} key={index}>
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "#222222",
                  padding: "5px",
                  borderRadius: "10px",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                  ...(pathname === item.url && {
                    fontWeight: "bold",
                  }),
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
