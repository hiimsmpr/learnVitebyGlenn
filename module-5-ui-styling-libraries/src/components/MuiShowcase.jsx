import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function MuiShowcase() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Material UI Example
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This card shows how quickly you can build polished interfaces with Material UI.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip label="Button" color="primary" />
          <Chip label="TextField" color="secondary" />
          <Chip label="Card" color="success" />
        </Stack>

        <Box sx={{ display: 'grid', gap: 2 }}>
          <TextField label="Project Name" placeholder="Example: Study Dashboard" fullWidth />
          <Button variant="contained" startIcon={<CheckCircleIcon />}>
            Save Project
          </Button>
          <Alert severity="success">Theme and component styles are already handled for you.</Alert>
        </Box>
      </CardContent>
    </Card>
  )
}
