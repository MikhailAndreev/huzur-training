import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  sliderWrap: {
    '& .slick-slider': {
      position: 'relative',
      display: 'block',
      boxSizing: 'borderBox',
      minHeight: 352,
      '&.visibleOverflow ': {
        '&.slick-list': {
          overflow: 'unset',
        },
      },
      '& .MuiBox-root': {
        outline: 'none',
      },
      '& .MuiPaper-root': {
        outline: 'none',
      },
    },
    '& .slick-list': {
      position: 'relative',
      overflow: 'visible',
      display: 'block',
      padding: 0,
      '&:focus': {
        outline: 'none',
      },
      '&:dragging': {
        cursor: 'pointer',
      },
    },

    '& .slick-slider .slick-track, & .slick-slider .slick-list ': {
      transform: 'translate3d(0, 0, 0)',
    },

    '& .slick-track ': {
      position: 'relative',
      display: 'block',
      top: 0,
      left: 0,
      '&:before': {
        content: '',
        display: 'table',
      },
      '&:after': {
        content: '',
        display: 'table',
        clear: 'both',
      },

      '& .slick-loading': {
        visibility: 'hidden',
      },
    },

    '& .slick-slide ': {
      float: 'right',
      height: '100%',
      minHeight: '1px',
      '& img': {
        display: 'block',
      },
      '&.slick-loading img': {
        display: 'none',
      },
      '&.dragging img': {
        pointerEvents: 'none',
      },
      '& .slick-initialized': {
        display: 'block',
      },
      '& .slick-loading': {
        visibility: 'hidden',
      },
      '& .slick-vertical': {
        display: 'block',
        height: 'auto',
        border: '1px solid transparent',
      },
    },

    '& .slick-arrow.slick-hidden': {
      display: 'none',
    },
    '& .slick-arrow': {
      position: 'absolute',
      top: '222px',
    },
  },

  avatar: {
    width: 184,
    height: 184,
  },
}));
