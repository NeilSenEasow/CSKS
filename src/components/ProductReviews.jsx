import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const reviews = [
  {
    id: 1,
    author: 'Daniel Stewart',
    rating: 5,
    date: 'July 5, 2020',
    content: 'This is an amazing product! I love.',
    likes: 53,
  },
  {
    id: 2,
    author: 'Denise Robertson',
    rating: 5,
    date: 'July 3, 2020',
    content: 'This is an amazing product! I love.',
    likes: 12,
  },
  {
    id: 3,
    author: 'Kathryn Murphy',
    rating: 5,
    date: 'June 28, 2020',
    content: 'This is an amazing product! I love.',
    likes: 0,
  }
];

function ProductReviews() {
  return (
    <Box mt={4} maxWidth="lg" mx="auto" px={2}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Product Reviews
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h2" component="span" fontWeight="bold">4.5</Typography>
            <Box ml={2}>
              <div className="flex text-yellow-400">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <Typography variant="body2" color="textSecondary">
                from 1238 reviews
              </Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Box>
            {reviews.map((review) => (
              <Paper key={review.id} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(review.rating)}
                  </div>
                  <Typography variant="body2" color="textSecondary" mx={1}>|</Typography>
                  <Typography variant="body2" color="textSecondary">{review.date}</Typography>
                </Box>
                
                <Typography variant="body1" gutterBottom>{review.content}</Typography>
                
                <Box display="flex" alignItems="center">
                  <img
                    src={`https://i.pravatar.cc/40?u=${review.id}`}
                    alt={review.author}
                    style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }}
                  />
                  <Typography variant="body1" fontWeight="medium">{review.author}</Typography>
                </Box>
                
                <Box display="flex" alignItems="center" mt={1}>
                  <Button startIcon={<FiThumbsUp />} size="small">
                    {review.likes}
                  </Button>
                  <Button startIcon={<FiThumbsDown />} size="small" sx={{ ml: 2 }}>
                    Dislike
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductReviews;