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
                                      <h3 className="text-capitalize">User Account</h3>
                                        <img src="../assets/images/comingsoon/profile.png" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-4">
                                    <div className="col-md-8 col-sm-8 col-10 cms_bk1">
                                        <h3 className="text-capitalize">Coming Soon !</h3>
                                        <p className="desc">
                                        Our User Account page will provide a secure and user-friendly interface for managing your assets, tracking trades, and accessing your portfolio. Stay tuned for more updates!
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