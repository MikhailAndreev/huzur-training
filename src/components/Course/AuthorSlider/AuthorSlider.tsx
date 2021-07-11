import { observer } from 'mobx-react';
import { Paper, Typography, Box, Avatar } from '@material-ui/core';
import clsx from 'clsx';
import Slider from 'react-slick';

import { useCommonStyles } from '../../../styles/commonStyles';
import { useStyles } from './styles';
import author_img from '../../../assets/images/author_img.png';
import SliderArrow from './SliderArrow';

const AuthorSlider: React.FC<any> = observer(() => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  };

  return (
    <Box mx={-2} className={classes.sliderWrap}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7].map((author: any, index: number) => (
          <Box key={index} width="100%" display="flex !important" justifyContent="center" px={2}>
            <Box width="100%" maxWidth={{ xxs: 320, md: 'none' }}>
              <Paper elevation={0} variant="outlined">
                <Box pt={8.25} pb={4.75} px={2}>
                  <Box display="flex" flexDirection="column" alignItems="center" mb={4.625}>
                    <Avatar src={author_img} className={classes.avatar} />
                  </Box>

                  <Typography variant="h6" align="center">
                    Хамидуллин Ришат Ахтямович
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
});

export default AuthorSlider;
