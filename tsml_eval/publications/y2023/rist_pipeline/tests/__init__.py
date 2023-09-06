"""RIST pipeline publication tests."""

__all__ = ["_RIST_TEST_RESULTS_PATH"]

import os

_RIST_TEST_RESULTS_PATH = (
    "./test_output/tsc_bakeoff/"
    if os.getcwd().split("\\")[-1] != "tests"
    else "../../../../../test_output/rist_pipeline/"
)
