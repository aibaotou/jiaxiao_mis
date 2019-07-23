import React from 'react';
import AppLayout from '../../components/AppLayout';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <AppLayout>
        <div>查询区域</div>
        <div>列表区域</div>
      </AppLayout>
    );
  }
}

export default Student;
