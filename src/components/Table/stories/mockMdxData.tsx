import * as React from "react"
import { Table } from "@chakra-ui/react"

/*
 * Note on the Chakra Table components:
 *
 * Only the `Td`, `Th`, `Tr`, `Table.Body`, and `Table.Header` components are used because those are the
 * only table elements we are defining styles with and sending to the MDX provider
 *
 * The use of `textAlign` is a mock for the `align` prop from the MDX parsing going to
 * the former prop in the given Chakra component.
 */

export const MdxDemoData = () => (
  <>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Column head</Table.ColumnHeader>
        <Table.ColumnHeader>Column head</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Twitter can censor any account or tweet</Table.Cell>
        <Table.Cell>
          Web3 tweets would be uncensorable because control is decentralized
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Payment service may decide to not allow payments for certain types of
          work
        </Table.Cell>
        <Table.Cell>
          Web3 payment apps require no personal data and can&apos;t prevent
          payments
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Servers for gig-economy apps could go down and affect worker income
        </Table.Cell>
        <Table.Cell>
          Web3 servers can&apos;t go down &ndash; they use Ethereum, a
          decentralized network of 1000s of computers as their backend
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </>
)

export const MdxEnergyConsumpData = () => (
  <>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader></Table.ColumnHeader>
        <Table.ColumnHeader textAlign="end">
          Annualized energy consumption (TWh)
        </Table.ColumnHeader>
        <Table.ColumnHeader textAlign="end">
          Comparison to PoS Ethereum
        </Table.ColumnHeader>
        <Table.ColumnHeader>Source</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Global data centers</Table.Cell>
        <Table.Cell textAlign="end">200</Table.Cell>
        <Table.Cell textAlign="end">77,000x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.iea.org/commentaries/data-centres-and-energy-from-global-headlines-to-local-headaches"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Gold mining</Table.Cell>
        <Table.Cell textAlign="end">131</Table.Cell>
        <Table.Cell textAlign="end">50,000x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://ccaf.io/cbnsi/cbeci/comparisons"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bitcoin</Table.Cell>
        <Table.Cell textAlign="end">131</Table.Cell>
        <Table.Cell textAlign="end">50,000x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://ccaf.io/cbnsi/cbeci/comparisons"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>PoW Ethereum</Table.Cell>
        <Table.Cell textAlign="end">78</Table.Cell>
        <Table.Cell textAlign="end">30,000x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://digiconomist.net/ethereum-energy-consumption"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Youtube (direct only)</Table.Cell>
        <Table.Cell textAlign="end">12</Table.Cell>
        <Table.Cell textAlign="end">4600x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.gstatic.com/gumdrop/sustainability/google-2020-environmental-report.pdf"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Gaming in USA</Table.Cell>
        <Table.Cell textAlign="end">34</Table.Cell>
        <Table.Cell textAlign="end">13,000x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.researchgate.net/publication/336909520_Toward_Greener_Gaming_Estimating_National_Energy_Use_and_Energy_Efficiency_Potential"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Netflix</Table.Cell>
        <Table.Cell textAlign="end">0.451</Table.Cell>
        <Table.Cell textAlign="end">173x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://assets.ctfassets.net/4cd45et68cgf/7B2bKCqkXDfHLadrjrNWD8/e44583e5b288bdf61e8bf3d7f8562884/2021_US_EN_Netflix_EnvironmentalSocialGovernanceReport-2021_Final.pdf"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>PayPal</Table.Cell>
        <Table.Cell textAlign="end">0.26</Table.Cell>
        <Table.Cell textAlign="end">100x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://app.impaakt.com/analyses/paypal-consumed-264100-mwh-of-energy-in-2020-24-from-non-renewable-sources-27261"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>AirBnB</Table.Cell>
        <Table.Cell textAlign="end">0.02</Table.Cell>
        <Table.Cell textAlign="end">8x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://s26.q4cdn.com/656283129/files/doc_downloads/governance_doc_updated/Airbnb-ESG-Factsheet-(Final).pdf"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>PoS Ethereum</Table.Cell>
        <Table.Cell textAlign="end">0.0026</Table.Cell>
        <Table.Cell textAlign="end">1x</Table.Cell>
        <Table.Cell>
          <a
            target="_blank"
            rel="noopener"
            href="https://carbon-ratings.com/eth-report-2022"
            dir="ltr"
          >
            source
            <span aria-hidden="true">↗</span>
          </a>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </>
)

export const MdxTypesOfBridgesData = () => (
  <>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Trusted Bridges</Table.ColumnHeader>
        <Table.ColumnHeader>Trustless Bridges</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          Trusted bridges depend upon a central entity or system for their
          operations.
        </Table.Cell>
        <Table.Cell>
          Trustless bridges operate using smart contracts and algorithms.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          They have trust assumptions with respect to the custody of funds and
          the security of the bridge. Users mostly rely on the bridge
          operator&apos;s reputation.
        </Table.Cell>
        <Table.Cell>
          They are trustless, i.e., the security of the bridge is the same as
          that of the underlying blockchain.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Users need to give up control of their crypto assets.
        </Table.Cell>
        <Table.Cell>
          Through smart contracts, trustless bridges enable users to remain in
          control of their funds.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </>
)
