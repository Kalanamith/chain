/*
 * This file is part of the Nodle Chain distributed at https://github.com/NodleCode/chain
 * Copyright (C) 2020  Nodle International
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

//! Reserve pallet benchmarks

#![cfg(feature = "runtime-benchmarks")]

use super::*;

use frame_benchmarking::{account, benchmarks};
use frame_system::RawOrigin;
use sp_runtime::traits::{Dispatchable, Saturating};

const SEED: u32 = 0;

benchmarks! {
    _ { }

    tip {
        let u in 0 .. 1000;
        let tipper = account("caller", u, SEED);
        let value = T::Currency::minimum_balance().saturating_mul(100.into());
    }: _(RawOrigin::Signed(tipper), value)

    spend {
        let u in 0 .. 1000;
        let dest = account("dest", u, SEED);
        let value = T::Currency::minimum_balance().saturating_mul(100.into());

        let call = Call::<T>::spend(dest, value);
        let origin = T::ExternalOrigin::successful_origin();
    }: {
        let _ = call.dispatch(origin)?;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tests::{new_test_ext, Test};
    use frame_support::assert_ok;

    #[test]
    fn test_benchmarks() {
        new_test_ext().execute_with(|| {
            assert_ok!(test_benchmark_tip::<Test>());
            assert_ok!(test_benchmark_spend::<Test>());
        });
    }
}