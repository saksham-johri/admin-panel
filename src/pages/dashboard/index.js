import React, { useState } from 'react';
import AddCource from '../../components/addCource';
import './style.scss';

const Dashboard = props => {
  const tabs = ['courceList', 'addCource', 'subjects'];
  const [activeTab, setActiveTab] = useState('courceList');

  const data = [
    {
      title: 'fwejrngj uihuh ir',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'fwrereghy rehng',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'etreythbsd r gb',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'fg ehtrnymt',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'f nrgn5y myjm r',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: 'f htn5ymu6, ',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const renderCourceList = () => {
    return (
      <>
        <div style={{ display: "flex", alignSelf: "flex-end", margin: 10 }}>
          <h2
            style={{
              fontWeight: 600,
              cursor: "pointer",
              userSelect: "none",
              color: "red",
            }}
            onClick={() => {
              setActiveTab("addCource");
            }}
          >
            Add New Course
          </h2>
        </div>

        <div>
          {data?.map((item, index) => {
            const { title = "", description = "" } = item || {};
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  margin: 5,
                  padding: 10,
                  width: "50em",
                }}
              >
                <p style={{ fontSize: 14, color: "#000" }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>Title: </span>
                  {title}
                </p>

                <p style={{ fontSize: 14, color: "#000" }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Description:{" "}
                  </span>
                  {description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: "blueviolet",
                      fontWeight: 600,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={() => {}}
                  >
                    View
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: "blueviolet",
                      fontWeight: 600,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    onClick={() => {}}
                  >
                    Add Subject
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <header>
        <hgroup>
          <h1>Example Client Website Name</h1>
        </hgroup>
      </header>

      <div style={{ display: 'flex' }}>
        <nav>
          <ul>
            <li>
              <a
                class='brick dashboard'
                href='javascript:void(0)'
                onClick={() => setActiveTab('courceList')}
              >
                <span class='icon'></span>Cources
              </a>
            </li>
            <li>
              <a class='brick pages' href='javascript:void(0)'>
                <span class='icon'></span>Subjects
              </a>
            </li>
            <li>
              <a class='brick navigation' href='javascript:void(0)'>
                <span class='icon'></span>Navigation
              </a>
            </li>
            <li>
              <a class='brick users' href='javascript:void(0)'>
                <span class='icon'></span>Users
              </a>
            </li>
            <li>
              <a class='brick settings' href='javascript:void(0)'>
                <span class='icon'></span>Website Settings
              </a>
            </li>
          </ul>
        </nav>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
          }}
        >
          {activeTab === 'courceList' && renderCourceList()}

          {activeTab === 'addCource' && <AddCource />}
        </div>
      </div>

      <footer style={{ height: '5vh' }} />
    </>
  );
};

export default Dashboard;
