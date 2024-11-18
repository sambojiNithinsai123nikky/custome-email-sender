import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const StatusTable = () => {
  // Placeholder data
  const statusData = [
    { id: 1, email: 'example1@test.com', status: 'Sent' },
    { id: 2, email: 'example2@test.com', status: 'Pending' },
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" component="h2" sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
        Email Status
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statusData.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.id}</TableCell>
              <TableCell>{entry.email}</TableCell>
              <TableCell>{entry.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatusTable;
