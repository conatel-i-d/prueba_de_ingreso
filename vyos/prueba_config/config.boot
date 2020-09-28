firewall {
    all-ping enable
    broadcast-ping disable
    config-trap disable
    ipv6-receive-redirects disable
    ipv6-src-route disable
    ip-src-route disable
    log-martians enable
    name FROM-OUTSIDE-TO-LOCAL {
        default-action drop
        rule 10 {
            action accept
            destination {
                address 172.20.0.5
                port 22
            }
            protocol tcp
        }
    }
    receive-redirects disable
    send-redirects enable
    source-validation disable
    syn-cookies enable
    twa-hazards-protection disable
}
interfaces {
    loopback lo {
    }
}
service {
    ssh {
    }
}
system {
    config-management {
        commit-revisions 100
    }
    console {
        device ttyS0 {
            speed 115200
        }
    }
    host-name vyos
    login {
        user admin {
            authentication {
                encrypted-password $6$YZZID0vl0aNST9gL$7VuKYWHtPGyFwkQ5EPEk0Zr6Q2U3yTrpWT4IyeA5OYW3INaNHYJAbqO4AfSK2r6tXMogF/wTtzta5AhGgvCPw1
                plaintext-password ""
            }
        }
        user vyos {
            authentication {
                encrypted-password $6$QxPS.uk6mfo$9QBSo8u1FkH16gMyAVhus6fU3LOzvLR9Z9.82m3tiHFAxTtIkhaZSWssSgzt4v4dGAL8rhVQxTg0oAG9/q11h/
                plaintext-password ""
            }
        }
    }
    ntp {
        server 0.pool.ntp.org {
        }
        server 1.pool.ntp.org {
        }
        server 2.pool.ntp.org {
        }
    }
    syslog {
        global {
            facility all {
                level info
            }
            facility protocols {
                level debug
            }
        }
    }
}
zone-policy {
    zone LOCAL {
        default-action drop
        from OUTSIDE {
            firewall {
                name FROM-OUTSIDE-TO-LOCAL
            }
        }
        local-zone
    }
    zone OUTSIDE {
        default-action drop
        interface eth0
    }
}


// Warning: Do not remove the following line.
// vyos-config-version: "broadcast-relay@1:cluster@1:config-management@1:conntrack@1:conntrack-sync@1:dhcp-relay@2:dhcp-server@5:dhcpv6-server@1:dns-forwarding@3:firewall@5:https@2:interfaces@12:ipoe-server@1:ipsec@5:l2tp@3:lldp@1:mdns@1:nat@5:ntp@1:pppoe-server@4:pptp@2:qos@1:quagga@6:salt@1:snmp@2:ssh@2:sstp@2:system@18:vrrp@2:vyos-accel-ppp@2:wanloadbalance@3:webgui@1:webproxy@1:zone-policy@1"
// Release version: 1.3dev0-2167-g14c754f8
