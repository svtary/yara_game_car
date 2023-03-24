import React from "react";
import "../../style/style.css";

export function Footer() {
  return (
    <>
      <div class="footer clearfix">
        <div class="w">
          <div class="mod_help">
            <dl>
              <dt>ABOUT YARA</dt>

              <dd>
                <a href="#">introduction</a>
              </dd>
              <dd>
                <a href="#">questions</a>
              </dd>

              <dd>
                <a href="#">YARA cloud</a>
              </dd>
              <dd>
                <a href="#">YARA podcast</a>
              </dd>
            </dl>
            <dl>
              <dt>YARA VALUE</dt>

              <dd>
                <a href="#">past</a>
              </dd>
              <dd>
                <a href="#">present</a>
              </dd>
              <dd>
                <a href="#">future</a>
              </dd>
            </dl>
            <dl>
              <dt>YARA MODE</dt>

              <dd>
                <a href="#">wet ware</a>
              </dd>
              <dd>
                <a href="#">cyborg</a>
              </dd>
              <dd>
                <a href="#">corp slave</a>
              </dd>
            </dl>
            <dl>
              <dt>YARA STATUS</dt>

              <dd>
                <a href="#">zoning out</a>
              </dd>
              <dd>
                <a href="#">vixen</a>
              </dd>
              <dd>
                <a href="#">NF</a>
              </dd>
              <dd>
                <a href="#">low mood</a>
              </dd>
              <dd>
                <a href="#">none to her</a>
              </dd>
            </dl>
            <dl>
              <dt>FIND YARA</dt>

              <dd>
                <a href="#">E-mail</a>
              </dd>
              <dd>
                <a href="#">Text</a>
              </dd>
              <dd>
                <a href="#">404 not found</a>
              </dd>
            </dl>

            <dl>
              <dt>COUNT DOWN</dt>
              <button class="begin">begin</button>
              <button class="end">stop</button>

              <span class="day"></span>
              <span class="hour"></span>
              <span class="minute"></span>
              <span class="second"></span>
            </dl>
          </div>

          <div class="mod_copyright">
            <div class="links">
              Copyright © 2023 Yara Inc. All rights reserved.{" "}
              <a href="#">Privacy Policy </a> | <a href="#">Terms of Use </a> |{" "}
              <a href="#">Sales and Refunds</a> | <a href="#">Legal</a> |{" "}
              <a href="#">Site Map</a>
            </div>
            <div class="copyright">Address:Mars</div>
          </div>
        </div>
      </div>
    </>
  );
}
