import React, { Component } from 'react';

const styles = {
  root: {
    padding: '38px 0',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#eeeeee'
    },
  ul: {
    listStyle: 'none',
    marginLeft: 0,
    marginTop: 30,
    padding: 0,
  },
  li: {
    marginBottom: 16,
  },
  link: {
    color: '#444',
    textDecoration: 'none',
  },
  copyright: {
    color: '#777',
  },
};

class FooterPage extends Component {
    render() {
        return(
            <div style={styles.root}>
                <ul style={styles.ul}>
                  <li style={styles.li}>
                    <a href="https://gitlab.com/kpuno/COMP313-ISP" style={styles.link}>
                      GitLab
                    </a>
                  </li>
                  <li style={styles.li}>
                    <a href="mailto:test.test.test@gmail.com" style={styles.link}>
                      Contact
                    </a>
                  </li>
                </ul>
                <div style={styles.copyright}>{'Copyright © 2017 ISP-COMP313'}</div>
            </div>
        )
    }
}

export default FooterPage;
