'use client'
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link";

export default function ComingSoon() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>

                <div>
                    <section className="container text-center">
                        <div className="cm_vh100">
                            <div className="cm_vhmid">
                                <div className="row justify-content-center">
                                    <div className="col-md-4 col-sm-6 col-10 cms_bk1">
                                      <h3 className="text-capitalize"><span className="pri_color">KYC</span> Verification</h3>
                                        <img src="../assets/images/comingsoon/verification.png" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-4">
                                    <div className="col-md-8 col-sm-8 col-10 cms_bk1">
                                        <h3 className="text-capitalize">Coming Soon !</h3>
                                        <p className="desc">
                                        KYC and trading kick off on October 9th. Prepare to verify, trade, and explore new opportunities. Stay tuned for the big day!
                                        </p>
                                        <Link href="/" className="btn-action">
                                            Go to home
                                            <span className="icos">
                                                <img src="../assets/images/icon/arrow2.png" className="img-fluid" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>

                </div>
            </Layout>
        </>
    )
}