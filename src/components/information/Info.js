import React from 'react';
import { Container } from '../../styles/Common.style';
import { H2, H3, Para } from '../../styles/Typography.style';
import { InfoCard, InfoGrid, InfoHeader, InfoWrapper } from './Info.style';
import BankingIcon from '../../images/icon-online.svg';
import BudgetingIcomn from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import Api from '../../images/icon-api.svg';

const Info = () => {
	return (
		<div>
			<InfoWrapper>
				<Container>
					<InfoHeader>
						<H2>Why choose easybank?</H2>
						<Para>
							{' '}
							We leverage Open Banking to turn your bank account into your
							financial hub. Control your finances like never before.
						</Para>
					</InfoHeader>
					<InfoGrid>
						<InfoCard>
							<img src={BankingIcon} alt='' />
							<H3>Online Banking</H3>
							<Para>
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={BudgetingIcomn} alt='' />
							<H3> Simple Budgeting</H3>
							<Para>
								See exactly where your money goes each month. Receive
								notifications when you’re close to hitting your limits.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={Onboarding} alt='' />
							<H3> Fast Onboarding</H3>
							<Para>
								We don’t do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</Para>
						</InfoCard>
						<InfoCard>
							<img src={Api} alt='' />
							<H3> Open API</H3>
							<Para>
								Manage your savings, investments, pension, and much more from
								one account. Tracking your money has never been easier.
							</Para>
						</InfoCard>
					</InfoGrid>
				</Container>
			</InfoWrapper>
		</div>
	);
};

export default Info;
