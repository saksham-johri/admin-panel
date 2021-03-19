import React, { useState } from 'react';
import AddCource from '../../components/addCource';
import AddSubject from '../../components/addSubject';
import ViewSubjects from '../../components/viewSubjects';
import './style.scss';

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState('courceList');

  const data = [
    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },
    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },
    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },

    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },

    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },

    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },

    {
      name: 'fwejrngj uihuh ir',
      category: 'fghjkl',
      createdBy: 'gikjj',
      price: '12345',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      prerequisite: 'dfghj fghjk',
      learning: 'qwertyuiop',
    },
  ];

  const addCourse = obj => {
    data.push(obj);
    console.log('data', data);
  };

  const renderCourceList = () => {
    return (
      <>
        <div style={{ display: 'flex', alignSelf: 'flex-end', margin: 10 }}>
          <h2
            style={{
              fontWeight: 600,
              cursor: 'pointer',
              userSelect: 'none',
              color: 'red',
            }}
            onClick={() => {
              setActiveTab('addCource');
            }}
          >
            Add New Course
          </h2>
        </div>

        <div>
          {data?.map((item, index) => {
            const {
              name = '',

              price = '',

              category = '',

              createdBy = '',

              prerequisite = '',

              description = '',

              learning = '',
            } = item || {};
            return (
              <div
                className='row'
                key={index}
                style={{
                  backgroundColor: 'white',
                  margin: 5,
                  padding: 10,
                  width: '50em',
                }}
              >
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course Name:{' '}
                  </span>
                  {name}
                </p>
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course category:{' '}
                  </span>
                  {category}
                </p>
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course price:{' '}
                  </span>
                  {price}
                </p>
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course prerequisite:{' '}
                  </span>
                  {prerequisite}
                </p>
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course createdBy:{' '}
                  </span>
                  {createdBy}
                </p>
                <p className='col-6' style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Course learning:{' '}
                  </span>
                  {learning}
                </p>
                <p style={{ fontSize: 14, color: '#000' }}>
                  <span style={{ fontSize: 16, fontWeight: 600 }}>
                    Description:{' '}
                  </span>
                  {description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 20,
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: 'blueviolet',
                      fontWeight: 600,
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={() => {
                      setActiveTab('viewSubjects');
                    }}
                  >
                    View Subjects
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      color: 'blueviolet',
                      fontWeight: 600,
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={() => {
                      setActiveTab('addSubject');
                    }}
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
          <h1 style={{ color: '#171717' }}>Example Client Website Name</h1>
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

          {activeTab === 'addCource' && <AddCource addCourse={addCourse} />}
          {activeTab === 'addSubject' && <AddSubject />}
          {activeTab === 'viewSubjects' && <ViewSubjects />}
        </div>
      </div>

      <footer style={{ height: '5vh' }} />
    </>
  );
};

export default Dashboard;
