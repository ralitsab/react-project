import React from "react";
import { Modal } from '@mui/base/Modal';
import { Box, Button, Typography } from '@mui/material';

export default function LogoutModal({ open, handleClose, handleLogout }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
    >
      <Box sx={{
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography id="logout-modal-title" variant="h6" component="h2">
          Are you sure you want to log out?
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between" width="100%">
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} variant="contained" color="secondary">
            Logout
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}