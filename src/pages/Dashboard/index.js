import React from 'react';
import BarraTop from '../../components/BarraTop';

class Dashboard extends React.Component {
  render() {
    return (
      <di className="flex horizontal full-height">
        <div className="flex vertical">
          <p>Menu</p>
        </div>
        <div className="flex vertical full-width">
          <div className='flex horizontal'>
            <BarraTop />
          </div>
          <div className="flex full-height">{this.props.children}</div>
        </div>
      </di>
    );
  }
}

export default Dashboard;
