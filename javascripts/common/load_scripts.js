const loadScripts = () => {
  // Load common scripts and Communicator Scripts.
  const HWP_VERSION = "latest";

  // URL of files to load.
  const files = [
    `https://cdn.jsdelivr.net/gh/techsoft3d/hoops-web-viewer@2024.4.0/hoops_web_viewer.js?v=2024.4.0`,
    "/javascripts/communicator_scripts/web_viewer_ui.js?v=latest",
    "/javascripts/communicator_scripts/communicator_server_integration.js?v=latest",
    "/javascripts/communicator_scripts/sample.js?v=latest",
  ];

  files.forEach((url) => {
    console.log("loading files.");
    jQuery.ajax({
      url: url,
      dataType: "script",
      success: () => {
        console.log("loaded!");
      },
      async: true,
    });
  });
};

loadScripts();
