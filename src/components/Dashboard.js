import React from 'react';
import EmailForm from './EmailForm';
import StatusTable from './StatusTable';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ color: '#1976d2' }}>
        Email Sending Dashboard
      </Typography>
      <EmailForm />
      <StatusTable />
    </Container>
  );
};

export default Dashboard;
