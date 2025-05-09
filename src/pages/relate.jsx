import styled from 'styled-components';
import { useState } from 'react';
import Media11 from '../images/media1-1.jpg';
import Media21 from '../images/media2-1.jpg';
import Media22 from '../images/media2-2.jpg';
import Media31 from '../images/media3-1.jpg';
import Media41 from '../images/media4-1.jpg';


function Relate() {
  const [expand, setExpand] = useState({
    policy: false,
    media: false,
    news: false
  });

  const toggleExpand = (section) => {
    setExpand(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }


  return (
    <Container>
      <Title onClick={() => toggleExpand('policy')}>
        政府法规
        <ArrowIcon $expand={expand.policy}>▼</ArrowIcon>
      </Title>
      {expand.policy && (
        <Content>
          <SubTitle>
            <h3>文化和旅游部关于公布2023—2025年国家级非物质文化遗产生产性保护示范基地名单的通知</h3>
            <p>文旅非遗发〔2024〕25号</p>
          </SubTitle>
          <SubContent>
            <p style={{ textIndent:"0"}}>各省、自治区、直辖市文化和旅游厅（局）、新疆生产建设兵团文化体育广电和旅游局：</p>
            <p>生产性保护是非物质文化遗产保护的重要方式，主要应用于传统美术和传统技艺类非物质文化遗产保护领域，有利于增加项目实践频次、壮大传承队伍、激发创新创造活力；有利于促进传统工艺和现代技术有机结合，增强企业核心竞争力；有利于推动创造性转化、创新性发展，实现高质量传承发展。</p>
            <p>根据《“十四五”非物质文化遗产保护规划》和文化和旅游部等十部门《关于推动传统工艺高质量传承发展的通知》的工作要求，在各地推荐的基础上，经过专家评审、实地考察和社会公示等程序，文化和旅游部认定99家企业和单位为“2023—2025年国家级非物质文化遗产生产性保护示范基地”（以下简称“示范基地”），现予公布（见附件），并就进一步加强示范基地建设工作有关事项通知如下。</p>
            <h3>一、明确工作目标</h3>
            <p>示范基地要全面落实文化和旅游部等十部门《关于推动传统工艺高质量传承发展的通知》中有关任务部署，始终把社会效益放在首位，实现社会效益和经济效益相统一。要处理好保护传承与合理利用的关系，坚持项目保护优先，不断强化项目保护力度，全面掌握并运用传统工艺核心技艺和关键技术，探索运用现代生产技术和管理方式，提高生产效率。要加强传承人队伍建设，充分发挥代表性传承人在带徒传技、交流推广、技术研究等方面的重要作用，建立年龄结构合理、数量充足、素质优良的人才队伍。要发挥示范引领作用，聚焦行业共性关键技术和标准的研究，助力行业发展和产业升级，推出更多满足人民美好生活需要、展现传统文化魅力的优秀产品。</p>
            <h3>二、加大支持力度</h3>
            <p>文化和旅游部将在企业培育、人才培养、资源对接、项目服务、品牌推广等方面对示范基地予以支持，及时总结示范基地经验做法，对于工作扎实有效、取得较好社会效益和经济效益、在传承人以及当地群众中具有良好影响和声誉的示范基地予以宣传。各省级文化和旅游行政部门要加强政策引导，为示范基地开展生产性保护营造环境、创设条件和提供服务。各地要充分利用电视、报纸、网络等媒体，对示范基地在弘扬传统文化、服务经济社会发展中的生动实践开展宣传，营造有利于示范基地发展的良好环境和社会氛围。</p>
            <h3>三、完善工作机制</h3>
            <p>示范基地应当于每年12月15日经省级文化和旅游行政部门向文化和旅游部报送当年工作报告。示范基地名称、业务范围等重要申报事项发生变更的，应当在变更之日起1个月内经省级文化和旅游行政部门向文化和旅游部备案。各省级文化和旅游行政部门要加强指导，了解本地区示范基地在项目保护、人才培养、生产经营等方面的情况。文化和旅游部采取随机抽查等方式对示范基地进行动态管理，对发生损害消费者权益、质量问题、安全事故、侵犯他人知识产权、扰乱市场秩序行为等问题的予以限期整改，整改不力或问题严重的撤销命名。文化和旅游部每3年对已认定的示范基地进行复核，并开展新一轮认定工作。</p>
            <h3>四、规范名称使用</h3>
            <p>“国家级非物质文化遗产生产性保护示范基地”名称只能用于被认定的生产经营主体，用于广告的应符合有关法律法规要求。“国家级非物质文化遗产生产性保护示范基地”以及与其相近的标识或文字不可作为商标注册。示范基地牌匾应悬挂或放置于被认定企业或单位的主要办公或经营场所，不得复制和扩大使用范围。任何组织或个人不得自行制作、伪造、变造、冒用“国家级非物质文化遗产生产性保护示范基地”名称、标识和文字。</p>
            <p>特此通知。</p>
            <br />
            <p>
              附件: <a href='https://zwgk.mct.gov.cn/zfxxgkml/fwzwhyc/202403/t20240328_951955.html' target="_blank" rel="noopener noreferrer" style={ {color:"black"}}>
                2023—2025年国家级非物质文化遗产生产性保护示范基地名单
              </a>
            </p>
            <br />
            <Footer>
              <div>文化和旅游部</div>
              <p>2024年3月20日</p>
            </Footer>
          </SubContent>
        </Content>  
      )}
      <Title onClick={() => toggleExpand('media')}>
        媒体关注
        <ArrowIcon $expand={expand.media}>▼</ArrowIcon>
      </Title>
      {expand.media && (
        <Content>
          <SubTitle><h3>长江文化艺术季系列活动之“国潮也疯狂·湖北非遗时装秀暨创新创意展”活动火热启幕</h3></SubTitle>
          <SubContent>
            <p>赓续长江文脉,共创时代华章。10月12日，长江文化艺术季系列活动之“国潮也疯狂·湖北非遗时装秀暨创新创意展”在武汉国际会展中心隆重开幕。省委宣传部一级巡视员陶宏家，二级巡视员黄勤，省文旅厅党组成员、副厅长唐昌华，二级巡视员孙旭，省广播电视台党委委员、副总经理晏治林，省文投党委委员、副总经理王钊等相关领导出席开幕式并共同为活动启幕。省委宣传部和省文旅厅领导致辞。</p>
            <MediaSection>
              <Image src={Media11}></Image>
              <p>领导与嘉宾共同启动水晶柱，国潮也疯狂·湖北非遗时装秀暨创新创意展开幕（左起：省委宣传部二级巡视员黄勤，省广播电视台党委委员、副总经理晏治林，省文化和旅游厅党组成员、副厅长唐昌华，省委宣传部一级巡视员陶宏家，省文化和旅游厅二级巡视员孙旭，省文投党委委员、副总经理王钊）</p>
              <p>本次活动从10月12日持续至14日，通过举办湖北非遗时装秀、湖北非遗创新创意展和湖北非遗创新发展座谈交流会等活动，展示我省第二届文创设计大赛“传承·匠心国潮”赛道阶段性成果，持续推动湖北非物质文化遗产传承发展和文化创意的转化利用。活动期间，60套非遗精品服饰、100个非遗项目精彩亮相，有力推动荆楚优秀传统文化创造性转化、创新性发展，激发我省文化产业创新创造活力，助力我省文化产业高质量发展。</p>
              <p>开幕式现场，一曲潜江民歌《催咚催》喜迎八方贵客，拉开了活动序幕；行云流水、刚柔并济的武当武术迎来阵阵喝彩。</p>
            </MediaSection>
            <MediaSection>
              <Image src={Media21}></Image>
              <Image src={Media22}></Image>
              <p>湖北非遗时装秀是此次活动的一大亮点，精选我省“挑补织绣”类非遗服饰精品60套，以模特T台走秀的方式展示非遗精湛技艺与潮流设计的巧妙融合，由传承人和纺大非遗团队师生一起将荆楚纺织非遗元素与国际时尚设计趋势结合、全手工绣制而成；涵盖了汉绣、红安绣活、英山缠花、大冶刺绣、荆州民间刺绣、土家织锦“西兰卡普”、堂纺叠绣等湖北非遗代表性项目。整场秀以女装为主，搭配了男装和童装的主题系列设计，是荆楚非遗走向市场，走进当代生活的生动实践。</p>
            </MediaSection>
            <MediaSection>
              <Image src={Media31}></Image>
              <p>湖北非遗创新创意展集中展示我省100个具有地域特色的非遗代表性项目，按照手工技艺、纺染织绣、传统医药、制茶技艺、美食五大类别划分为“匠心神韵”“锦绣风华”“妙手岐黄”“幽茗留香”和“五谷丰登”五个展示区，打造亲民、热闹的非遗展销市集，让游客“一站式”尝遍全省特色美味，选购荆楚优质非遗产品。</p>
              <p>本次活动既是一次非遗技艺和非遗创新产品的展示，也是一个连接非遗传承人与广大消费者的平台。其中，非遗烟火气，最抚凡人心，人气最高的非“五谷丰登”展区莫属。姜桥的芋头圆子、鄂州的鱼丸、荆门的腊香鸡、谢埠的千张等手工制作美食半天时间就销售过半；扬子江的传统糕点、黄石阳新的油面、孝感的糊汤米酒、枣阳的酸浆面等美食都需要排队品尝和购买。</p>
              <p>“妙手岐黄”展区也聚集了大量前来寻医问药的民众，蕲春艾灸疗法的省级非遗代表性传承人韩善明正在给患者免费诊疗，其展位前排满了想要体验的人群。杜氏平衡因果疗法、潜江李氏针灸等展位前也排起了长龙，大家都想亲身体验一次中医的奇妙手法。五大展区各个热闹非凡，是湖北非遗“连接现代生活 绽放迷人光彩”的生动呈现。</p>
              <p>湖北非遗创新发展座谈交流会邀请了来自全国多地的非遗领域专家学者、非遗代表性传承人及文创企业界精英，围绕非遗连接现代生活、非遗与旅游融合发展、非遗赋能乡村振兴等主题开展讨论交流，探讨非遗在新时代的创新发展路径，为湖北非遗保护传承与创新发展建言献策。</p>
            </MediaSection>
            <MediaSection>
              <Image src={Media41}></Image>
              <p>近年来，我省充分挖掘非遗产品资源，丰富非遗产品供给，相继组织开展了“湖北非遗产品优惠展销季暨首届非遗时装秀”“第二届湖北非遗产品优惠展销季暨非遗嘉年华”“荆楚非遗宣传展示暨非遗嘉年华”等系列活动，达到了较好的销售额，形成了非遗消费市场发展的新局面。“人民的非遗，人民共享”，我省非遗展销活动已逐步成为品牌，既帮助参展非遗企业扩大了销售量，提高了知名度，又让广大消费者得到实惠。活动相关负责人表示，将以此次活动为载体，不断推动全省非遗资源的交流与融合，全面展现我省非遗保护成果，深挖非遗消费潜力，共筑非遗发展新高地。</p>
              <p>本次活动由中共湖北省委宣传部、湖北省文化和旅游厅、湖北省精神文明建设办公室指导，湖北文化产业发展投资有限公司主办，湖北省群众艺术馆（湖北省非物质文化遗产保护中心）承办。</p>
            </MediaSection>
          </SubContent>
        </Content>  
      )}
      <Title onClick={() => toggleExpand('news')}>
        新闻动态
        <ArrowIcon $expand={expand.news}>▼</ArrowIcon>
      </Title>
      {expand.news && (
        <Content>
          <SubTitle>
            <h3>文化和旅游部关于公布第六批国家级非物质文化遗产代表性传承人的通知</h3>
            <p>文旅非遗发〔2025〕23号</p>
          </SubTitle>
          <SubContent>
            <p>各省、自治区、直辖市文化和旅游厅（局），新疆生产建设兵团文化体育广电和旅游局：</p>
            <p>习近平总书记高度重视非物质文化遗产保护传承，强调要积极培养传承人，一代一代接下来、传下去。近年来，各地高度重视非物质文化遗产代表性传承人队伍建设，涌现出一大批德艺双馨、技艺精湛，在非物质文化遗产保护传承中发挥重要作用的典型代表。根据《中华人民共和国非物质文化遗产法》及《国家级非物质文化遗产代表性传承人认定与管理办法》有关规定，为加强非物质文化遗产传承人队伍建设，进一步提升非物质文化遗产系统性保护能力水平，保护和传承好非物质文化遗产，文化和旅游部组织开展第六批国家级非物质文化遗产代表性传承人认定工作。经推荐申报、材料复核、专家初评、社会公示、评审委员会审议等程序，确定了第六批国家级非物质文化遗产代表性传承人名单（942人），现予以公布。</p>
            <p>希望国家级非物质文化遗产代表性传承人发挥模范带头作用，积极开展传承活动，培养后继人才，为非物质文化遗产保护事业作出更大贡献。各单位要按照《中华人民共和国非物质文化遗产法》规定，鼓励和支持非物质文化遗产代表性传承人开展传承传播活动，切实做好非物质文化遗产保护传承，持续推进中华优秀传统文化创造性转化、创新性发展。</p>
            <p>特此通知。</p>
            <br />
            <p>
              附件: <a href='https://zwgk.mct.gov.cn/zfxxgkml/fwzwhyc/202503/t20250314_958832.html' target="_blank" rel="noopenerr noreferrer" style={ {color:"black"}}>
              第六批国家级非物质文化遗产代表性传承人名单.docx
              </a>
            </p>
            <br />
            <Footer>
              <div>文化和旅游部</div>
              <p>2025年3月12日</p>
            </Footer>
          </SubContent>
        </Content>  
      )}
    </Container>
  )

}

export default Relate;

/***************************************************************
                        Styled Components
***************************************************************/
const Container = styled.div`
  display: flex;
  margin: 2em auto;
  max-width: 85vw;
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
  max-width: 80vw;
  padding: 15px;
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
  padding: 0 3em;
  text-indent: 2em;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MediaSection = styled.div`
  border-top: solid 1px rgb(174, 60, 60, 0.7);
  padding: 1em 0;
`;

const Image = styled.img`
  padding: 1em;
  display: block;
  margin: 0 auto;
  max-width: 50vw;
  height: auto;
`;