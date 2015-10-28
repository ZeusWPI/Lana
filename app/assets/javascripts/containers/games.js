import GameList from '../components/games';
import { connect } from 'react-redux';
function props(){
  return {
    games: [{
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    },
    {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    },
    {
      title: 'Dota 2',
      image_url: 'http://1.bp.blogspot.com/-GplgZlvkXSc/Uk_3BipvAlI/AAAAAAAAAJE/NIU9Sm2vSVU/s1600/Dota2-Filled.png',
      groups: 69,
      events: 3
    }
    ]
  };
}
export default connect(props)(GameList);
