import Layout from "components/layout";
import SearchEngineOptimization from "components/seo";
import useGitHubRepoData from "hooks/useGitHubRepoData";
import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { CommonPageTitle } from "components/pageTitles";
import { StatusButtonDownload } from "components/statusButton";


const PowerControl = ({ data }) => {
    const { projectDataAndroid, loadingAndroid, errorAndroid } = useGitHubRepoData("PowerControl-android")

    return (
        <Layout privacy>
            <CommonPageTitle title={"KeyGo - Digital Vault"} description={projectDataAndroid?.description} >
                <Col className="d-flex flex-column gap-2 work-box">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center align-items-center">
                        <div className="d-flex justify-content-center">
                            <div style={{ maxWidth: "183px" }} >
                                <a href='https://play.google.com/store/apps/details?id=<app_id_here>&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                    <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' className="w-100" />
                                </a>
                            </div>
                        </div>

                        <StatusButtonDownload text="Download stable APK" projectData={projectDataAndroid} loading={loadingAndroid} error={errorAndroid} />
                        <Button href={"https://github.com/OffRange/PowerControl-android"}><span><Github className="me-2" />View on GitHub</span></Button>
                    </div>
                </Col>
            </CommonPageTitle>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-gradient">Comming Soon</h2>

                </Container>
            </section>
        </Layout>
    )
}

export const Head = () => <SearchEngineOptimization title={"PowerControl"}
    description={"A tool for remot shutdown and booting your devices"}
    keywords={"PowerControl, power control, remote shutdown, remote boot, offrange"} />

export default PowerControl