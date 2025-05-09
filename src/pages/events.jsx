import styled from 'styled-components';
import { Carousel } from 'antd';
import { useState } from 'react';
import qian1 from '../images/铅锡1.jpg';
import qian2 from '../images/铅锡2.jpg';
import qian3 from '../images/铅锡3.jpg';
import qian4 from '../images/铅锡4.jpg';
import chu1 from '../images/楚式1.jpg';
import chu2 from '../images/楚式2.jpg';
import chu3 from '../images/楚式3.jpg';
import chu4 from '../images/楚式4.jpg';



function Events() {
  const [expand, setExpand] = useState({
    goods: false,
    serve: false
  });

  const toggleExpand = (section) => {
    setExpand(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }


  return (
    <Container>
      <Title onClick={() => toggleExpand('goods')}>
        定制服务
        <ArrowIcon $expand={expand.goods}>▼</ArrowIcon>
      </Title>
      {expand.goods && (
        <Content>
          <SubTitle>
            <h2>荆州非遗交流互动平台定制服务设计方案</h2>
          </SubTitle>
          <SubContent>
            <h3>定制服务类型</h3>
            <h3 style={{ color:"rgb(103, 46, 29)"}}>1. 非遗体验定制</h3>
            <p>个人定制：非遗技艺体验课程（如楚绣、漆器制作等）</p>
            <p>团体定制：企业团建非遗主题活动、学校非遗研学课程</p>
            <p>亲子定制：适合家庭参与的非遗手作体验</p>
            <br />
            <h3 style={{ color:"rgb(103, 46, 29)"}}>2. 非遗产品定制</h3>
            <p>传统工艺个性化定制（如刻漆、青铜器复制品）</p>
            <p>非遗元素文创产品设计制作</p>
            <p>节庆主题非遗礼品套装</p>
            <br />
            <h3 style={{ color:"rgb(103, 46, 29)"}}>3. 非遗活动定制</h3>
            <p>非遗主题婚礼策划</p>
            <p>传统文化节日庆典</p>
            <p>非遗技艺展示表演</p>
          </SubContent>
          <SubContent>
            <h3>服务流程设计</h3>
            <p>需求咨询：线上/线下咨询  联系电话</p>
            <p>方案设计：专业团队根据需求制定个性化方案</p>
            <p>确认细节：与用户沟通确定活动内容、时间、预算等</p>
            <p>服务执行：非遗传承人/专业人员提供服务</p>
            <p>反馈改进：收集用户意见，优化服务</p>
          </SubContent>
        </Content>
      )}
      <Title onClick={() => toggleExpand('serve')}>
        文创产品
        <ArrowIcon $expand={expand.serve}>▼</ArrowIcon>
      </Title>
      {expand.serve && (
        <div style={{ width: '80%', margin: '0 auto' }}>
          <SubTitle><h2>铅锡刻镂技艺</h2></SubTitle>
          <Carousel 
            style={{ 
              height: '100%',
              backgroundColor: "rgba(226, 228, 213, 0.6)",
            }}
            arrows
            autoplay
          >
            {[qian1, qian2, qian3, qian4].map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`铅锡工艺${index + 1}`}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </Carousel>
          <br />
          <br />
          <hr style={{ 
            borderColor: 'rgba(215, 76, 76, 0.7)', 
            borderWidth: '1px 0 0 0',
            margin: '2em 0'
          }} />
          <br />
          <SubTitle><h2>楚式漆器髹饰技艺</h2></SubTitle>
          <Carousel 
            style={{ 
              height: '100%',
              backgroundColor: "rgba(226, 228, 213, 0.6)",
            }}
            arrows
            autoplay
          >
            {[chu1, chu2, chu3, chu4].map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`漆器髹饰${index + 1}`}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </Carousel>
          <br />
        </div> 
      )}
      <Title>视频教学</Title>
    </Container>
  )

}

export default Events;

/***************************************************************
                        Styled Components
***************************************************************/
const Container = styled.div`
  display: flex;
  margin: 2em auto;
  max-width: 1000px;
  border-radius: 8px;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5)
`

const Title = styled.h2`
  color:rgb(168, 68, 38);
  cursor: pointer;
  border-bottom: 1px solid rgb(147, 58, 31);
  transition: all 0.3s ease;

  &:hover {
    color:rgb(220, 92, 53);
    transform: scale(1.1);
    border-bottom: 1px solid rgb(220, 92, 53, 0.7);
  }

  &:active {
    transform: scale(0.98);
  }
`

const Content = styled.div`
  max-width: 980px;
  padding: 5vw;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  margin: 10px 0;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ArrowIcon = styled.span`
  display: inline-block; 
  font-size: 0.8em;
  transition: transform 0.3s ease;
  transform: ${props => props.$expand ? 'rotate(180deg)' : 'rotate(0)'};
  margin-left: 10px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubContent = styled.div`
  border-top: solid 1px rgb(174, 60, 60, 0.7);
  padding: 1em 5em;
`;
