import React from 'react';
import ContentLoader from 'react-content-loader';

function MyLoader({ type }) {
  return (
    <>
      {
      type === 'doughnut' ? (
        <ContentLoader
          speed={2}
          width={500}
          height={280}
          viewBox="0 0 500 280"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="202" cy="162" r="113" />
          <rect x="25" y="18" rx="2" ry="2" width="140" height="10" />
          <rect x="387" y="87" rx="2" ry="2" width="140" height="10" />
          <rect x="387" y="205" rx="2" ry="2" width="140" height="10" />
          <rect x="386" y="126" rx="2" ry="2" width="140" height="10" />
          <rect x="387" y="167" rx="2" ry="2" width="140" height="10" />
        </ContentLoader>
      ) : type === 'bar' ? (
        <ContentLoader
          speed={2}
          width={501}
          height={280}
          viewBox="0 0 501 280"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="25" y="18" rx="2" ry="2" width="169" height="15" />
          <rect x="26" y="101" rx="2" ry="2" width="71" height="14" />
          <rect x="28" y="261" rx="2" ry="2" width="71" height="14" />
          <rect x="29" y="154" rx="2" ry="2" width="71" height="14" />
          <rect x="30" y="208" rx="2" ry="2" width="71" height="14" />
          <rect x="126" y="135" rx="2" ry="2" width="129" height="35" />
          <rect x="126" y="81" rx="2" ry="2" width="71" height="35" />
          <rect x="126" y="188" rx="2" ry="2" width="182" height="35" />
          <rect x="127" y="243" rx="2" ry="2" width="249" height="35" />
        </ContentLoader>
      ) : type === 'bar-health' ? (
        <ContentLoader
          speed={2}
          width={1800}
          height={280}
          viewBox="0 0 1500 280"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="2" ry="2" width="169" height="15" />
          <rect x="0" y="23" rx="2" ry="2" width="413" height="11" />
          <rect x="0" y="42" rx="2" ry="2" width="138" height="9" />
          <rect x="1500" y="-8" rx="2" ry="2" width="158" height="78" />
          <rect x="19" y="135" rx="2" ry="2" width="55" height="142" />
          <rect x="85" y="222" rx="2" ry="2" width="55" height="55" />
          <rect x="153" y="194" rx="2" ry="2" width="55" height="84" />
          <rect x="220" y="134" rx="2" ry="2" width="55" height="142" />
          <rect x="286" y="221" rx="2" ry="2" width="55" height="55" />
          <rect x="354" y="216" rx="2" ry="2" width="55" height="61" />
          <rect x="424" y="194" rx="2" ry="2" width="55" height="84" />
          <rect x="491" y="134" rx="2" ry="2" width="55" height="142" />
          <rect x="625" y="193" rx="2" ry="2" width="55" height="84" />
          <rect x="559" y="206" rx="2" ry="2" width="55" height="71" />
        </ContentLoader>
      )
        : <div>Loading...</div>
    }
    </>

  );
}

export default MyLoader;
